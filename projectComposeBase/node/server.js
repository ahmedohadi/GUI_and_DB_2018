'use strict';
const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    port: 3000, host: '0.0.0.0',
    routes: {
        cors: true
    }
});



//Initialize the mysql variable and create the connection object with necessary values
//Uses the https://www.npmjs.com/package/mysql package.
var mysql = require('mysql');
var connection = mysql.createConnection({
    //host will be the name of the service from the docker-compose file. 
    host: 'mysql',
    user: 'root',
    password: 'go_away!',
    database: 'Chatboard'
});

// host: 'mysql',
// user: 'mark',
// password: 'abc123',
// database: 'cse3330'

connection.connect(function (err) {
});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        console.log('Server processing a / request');
        reply('Hello, Man!');
    }
});


//SINGUP
server.route({
    method: 'POST',
    path: '/signup',
    handler: function (request, reply) {
        var firstName = request.payload.firstname;
        var lastName = request.payload.lastname;
        var email = request.payload.email;
        var phone = request.payload.phone;
        var username = request.payload.username;
        var password = request.payload.password;
        var zipCode = request.payload.zipcode;
        var party = request.payload.parties;
        var office = request.payload.candidates;
        var sql1 = "SELECT username FROM Users WHERE username = '" + username + "'";
        connection.query(sql1, function (err, result) {
            if (err) {
                throw err;
            }
            if (result.length == 0) {
                var sql = "INSERT INTO Users (firstName, lastName, email, username, thepassword, phone, zipCode, party, office) VALUES (" + "'" + firstName + "'" + ", " + "'" + lastName + "'" + ", " + "'" + email + "'" + ", " + "'" + username + "'" + ", " + "'" + password + "'" + ", " + "'" + phone + "'" + ", '" + zipCode + "'" + "," + "'" + party + "'" + ", " + "'" + office + "'" + ")";
                connection.query(sql, function (err, result) {
                    if (err) {
                        throw err;
                    }
                });
                sql = "INSERT INTO Issues (username, econJobs, immigration, healthCare, globalWarming, budget, abortion) VALUES (" + "'" + username + "'" + "," + 0 + "," + 0 + "," + 0 + "," + 0 + "," + 0 + "," + 0 + ")";
                connection.query(sql, function (err, result) {
                    if (err) {
                        throw err;
                    }
                    reply(200);
                });
            }
            else {
                reply("This Username already exists. Please choose a different one.");
            }
        });
    }
});


//LOGIN
server.route({
    method: 'POST',
    path: '/login',
    handler: function (request, reply) {
        var username = request.payload.username;
        var password = request.payload.password;
        var sql = "SELECT username, thePassword FROM Users WHERE username = '" + username + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
            if (username == result[0].username) {
                if (password == result[0].thePassword) {
                    reply(200);
                }
                else {
                    reply(500); //incorrect password
                }
            }
            else {
                reply(500); //username not contained
            }
        });
    }
});
///////////////////////////////////////////////////
//UPDATES
////////////////////////////////////////////////////
server.route({
    method: 'POST',
    path: '/updateCandidacy/{username}',
    handler: function (request, reply) {
        var office = request.payload.position;
        var party = request.payload.party;
        var sql1 = "UPDATE Users SET office = '" + office + "', party = '" + party + "' WHERE username = '" + encodeURIComponent(request.params.username + "'");
        connection.query(sql1, function (err, result) {
            if (err) {
                throw err;
            }
            //reply("Updated candidacy");
            reply(encodeURIComponent(request.params.username));
        });
    }
});

server.route({
    method: 'PUT',
    path: '/updatePassword/{username}',
    handler: function (request, reply) {
        var oldPassword = request.payload.oldPassword;
        var newPassword = request.payload.newPassword;
        console.log(encodeURIComponent(request.params.username));
        console.log(request.payload);
        var sql1 = "SELECT thepassword FROM Users WHERE username = '" + encodeURIComponent(request.params.username) + "'";
        connection.query(sql1, function (err, result) {
            if (err) {
                throw err;
            }
            if (result.length == 0) {
                reply("The user is not contained");
                return;
            }
            var tablePass = result[0].thepassword;
            if (tablePass == oldPassword) {
                var sql = "UPDATE Users SET thepassword = '" + newPassword + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
                connection.query(sql, function (err, result) {
                    if (err) {
                        throw err;
                    }
                    reply(200);
                });
            }
            else {
                reply("Incorrect old password" + tablePass + " " + oldPassword);
            }
        });
    }
});

// server.route({
//     method: 'PUT',
//     path: '/updateIssues/{username}',
//     handler: function (request, reply) {
//         var econJobs = request.payload.issue1Econ;
//         var immigration = request.payload.issue2Immi;
//         var healthCare = request.payload.issue3HealthCare;
//         var budget = request.payload.issue4Budget;
//         var environment = request.payload.issue5Envir;
//         var abortion = request.payload.issue6Abortion;
//         var sql = "UPDATE Issues SET econJobs = '" + econJobs + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//         });

//         sql = "UPDATE Issues SET immigration = '" + immigration + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//         });

//         sql = "UPDATE Issues SET healthCare = '" + healthCare + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//         });

//         sql = "UPDATE Issues SET globalWarming = '" + environment + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//         });

//         sql = "UPDATE Issues SET abortion = '" + abortion + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
//         connection.query(sql, function (err, result) {
//             if (err) {
//                 throw err;
//             }
//         });

//         reply(200);
//     }
// });


server.route({
    method: 'PUT',
    path: '/updateIssues/{username}',
    handler: function (request, reply) {
        var econJobs = request.payload[0].selected;
        var healthCare = request.payload[1].selected;
        var budget = request.payload[2].selected;
        var immigration = request.payload[1].selected;
        var environment = request.payload[4].selected;
        var abortion = request.payload[5].selected;
        if(econJobs == null){
            econJobs = 0;
        }
        else{
            econJobs = 1;
        }

        if(immigration == null){
            immigration = 0;
        }
        else{
            immigration = 1;
        }

        if(healthCare == null){
            healthCare = 0;
        }
        else{
            healthCare = 1;
        }

        if(budget == null){
            budget = 0;
        }
        else{
            budget = 1;
        }

        if(environment == null){
            environment = 0;
        }
        else{
            environment = 1;
        }
        if(abortion == null){
            abortion = 0;
        }
        else{
            abortion = 1;
        }
        console.log("econJObs" + econJobs);
        console.log("immigration" + immigration);
        console.log("healthCare" + healthCare);
        console.log("budget" + budget);
        console.log("environment" + environment);
        console.log("abortion" + abortion);

        // var econJobs = request.payload.issue1Econ;
        // var immigration = request.payload.issue2Immi;
        // var healthCare = request.payload.issue3HealthCare;
        // var budget = request.payload.issue4Budget;
        // var environment = request.payload.issue5Envir;
        // var abortion = request.payload.issue6Abortion;
        var sql = "UPDATE Issues SET econJobs = '" + econJobs + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
        });

        sql = "UPDATE Issues SET immigration = '" + immigration + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
        });

        sql = "UPDATE Issues SET healthCare = '" + healthCare + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
        });

        sql = "UPDATE Issues SET globalWarming = '" + environment + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
        });

        sql = "UPDATE Issues SET budget = '" + budget + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
        });

        sql = "UPDATE Issues SET abortion = '" + abortion + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
        });

        reply(200);
    }
});

//update account
server.route({
    method: 'PUT',
    path: '/updateAccount/{username}',
    handler: function (request, reply) {
        var sql = "";
        var first = request.payload.firstname;
        if (first != null) {
            sql = "UPDATE Users SET firstName = '" + first + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
                //reply(first + 'It worked');
            });
        }
        else {
            //console.log("okay we gucci");
        }

        var last = request.payload.lastname;
        if (last != null) {
            sql = "UPDATE Users SET lastName = '" + last + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
                //reply('It worked');
            });
        }
        else {
            //console.log("okay we gucci");
        }

        var email = request.payload.email;
        if (email != null) {
            sql = "UPDATE Users SET email = '" + email + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
                //reply('It worked');
            });
        }
        else {
            //console.log("okay we gucci");
        }

        var zipcode = request.payload.zipcode;
        if (zipcode != null) {
            sql = "UPDATE Users SET zipCode = '" + zipcode + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
                //reply('It worked');
            });
        }
        else {
            //console.log("okay we gucci");
        }

        var phone = request.payload.phone;
        if (phone != null) {
            sql = "UPDATE Users SET phone = '" + phone + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
                //reply('It worked');
            });
        }
        else {
            //console.log("okay we gucci");
        }

        var description = request.payload.description;
        if (description != null) {
            sql = "UPDATE Users SET description = '" + description + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
                //reply('It worked');
            });
        }
        else {
            //console.log("okay we gucci");
        }
        reply(200);
    }
});





///////////////////////////////////////////
//SEARCH STUFF
///////////////////////////////////////////

//DONE JOSH
server.route({
    method: 'GET',
    path: '/zipcode',
    handler: function (request, reply) {
        var sql = "SELECT * FROM Users WHERE zipCode ='" + request.query.search + "' AND office != 'Voter'";
        connection.query(sql, function (error, result) {
            console.log(result);
            var tempArr =[];
            for(var c = 0 ; c < result.length; c++){
                var obj = {
                    "username": result[c].username,
                    "firstname": result[c].firstName,
                    "lastname": result[c].lastName,
                    "email": result[c].email,
                    "phone": result[c].phone,
                    "zipcode": result[c].zipCode,
                    "party": result[c].party,
                    "candidates": result[c].office,
                    "description": result[c].description,
                    "picture": result[c].picture,
                }
                tempArr.push(obj);
            }
            reply(tempArr);
        });
    }
});

//DONE JOSH
server.route({
    method: 'GET',
    path: '/issues',
    handler: function (request, reply) {
        var str = request.query.search;
        str = str.toLowerCase();

        if(str == "economy"){
            var sql = "SELECT * FROM Issues NATURAL JOIN Users WHERE econJobs = 1 AND office != 'Voter'";
            connection.query(sql, function (error, result) {
                if (error) {
                    throw error;
                }
                var tempArr =[];
                for(var c = 0 ; c < result.length; c++){
                    var obj = {
                        "username": result[c].username,
                        "firstname": result[c].firstName,
                        "lastname": result[c].lastName,
                        "email": result[c].email,
                        "phone": result[c].phone,
                        "zipcode": result[c].zipCode,
                        "party": result[c].party,
                        "candidates": result[c].office,
                        "description": result[c].description,
                        "picture": result[c].picture,
                    }
                    tempArr.push(obj);
                }
                reply(tempArr);
            });
        } else if(str == "jobs"){
            var sql = "SELECT * FROM Issues NATURAL JOIN Users WHERE econJobs = 1 AND office != 'Voter'";
            connection.query(sql, function (error, result) {
                if (error) {
                    throw error;
                }
                var tempArr =[];
            for(var c = 0 ; c < result.length; c++){
                var obj = {
                    "username": result[c].username,
                    "firstname": result[c].firstName,
                    "lastname": result[c].lastName,
                    "email": result[c].email,
                    "phone": result[c].phone,
                    "zipcode": result[c].zipCode,
                    "party": result[c].party,
                    "candidates": result[c].office,
                    "description": result[c].description,
                    "picture": result[c].picture,
                }
                tempArr.push(obj);
            }
            reply(tempArr);
            });
        } else if(str == "healthcare"){
            var sql = "SELECT * FROM Issues NATURAL JOIN Users WHERE healthCare = 1 AND office != 'Voter'";
            connection.query(sql, function (error, result) {
                if (error) {
                    throw error;
                }
                var tempArr =[];
                for(var c = 0 ; c < result.length; c++){
                    var obj = {
                        "username": result[c].username,
                        "firstname": result[c].firstName,
                        "lastname": result[c].lastName,
                        "email": result[c].email,
                        "phone": result[c].phone,
                        "zipcode": result[c].zipCode,
                        "party": result[c].party,
                        "candidates": result[c].office,
                        "description": result[c].description,
                        "picture": result[c].picture,
                    }
                    tempArr.push(obj);
                }
                reply(tempArr);
            });
        } else if(str == "deficit"){
            var sql = "SELECT * FROM Issues NATURAL JOIN Users WHERE budget = 1 AND office != 'Voter'";
            connection.query(sql, function (error, result) {
                if (error) {
                    throw error;
                }
                var tempArr =[];
                for(var c = 0 ; c < result.length; c++){
                    var obj = {
                        "username": result[c].username,
                        "firstname": result[c].firstName,
                        "lastname": result[c].lastName,
                        "email": result[c].email,
                        "phone": result[c].phone,
                        "zipcode": result[c].zipCode,
                        "party": result[c].party,
                        "candidates": result[c].office,
                        "description": result[c].description,
                        "picture": result[c].picture,
                    }
                    tempArr.push(obj);
                }
                reply(tempArr);
            });
        }  else if(str == "budget"){
            var sql = "SELECT * FROM Issues NATURAL JOIN Users WHERE budget = 1 AND office != 'Voter'";
            connection.query(sql, function (error, result) {
                if (error) {
                    throw error;
                }
                var tempArr =[];
                for(var c = 0 ; c < result.length; c++){
                    var obj = {
                        "username": result[c].username,
                        "firstname": result[c].firstName,
                        "lastname": result[c].lastName,
                        "email": result[c].email,
                        "phone": result[c].phone,
                        "zipcode": result[c].zipCode,
                        "party": result[c].party,
                        "candidates": result[c].office,
                        "description": result[c].description,
                        "picture": result[c].picture,
                    }
                    tempArr.push(obj);
                }
                reply(tempArr);
            });
        }   else if(str == "immigration"){
            var sql = "SELECT * FROM Issues NATURAL JOIN Users WHERE immigration = 1 AND office != 'Voter'";
            connection.query(sql, function (error, result) {
                if (error) {
                    throw error;
                }
                var tempArr =[];
                for(var c = 0 ; c < result.length; c++){
                    var obj = {
                        "username": result[c].username,
                        "firstname": result[c].firstName,
                        "lastname": result[c].lastName,
                        "email": result[c].email,
                        "phone": result[c].phone,
                        "zipcode": result[c].zipCode,
                        "party": result[c].party,
                        "candidates": result[c].office,
                        "description": result[c].description,
                        "picture": result[c].picture,
                    }
                    tempArr.push(obj);
                }
                reply(tempArr);
            });
        }  else if(str == "environment"){
            var sql = "SELECT * FROM Issues NATURAL JOIN Users WHERE globalWarming = 1 AND office != 'Voter'";
            connection.query(sql, function (error, result) {
                if (error) {
                    throw error;
                }
                var tempArr =[];
                for(var c = 0 ; c < result.length; c++){
                    var obj = {
                        "username": result[c].username,
                        "firstname": result[c].firstName,
                        "lastname": result[c].lastName,
                        "email": result[c].email,
                        "phone": result[c].phone,
                        "zipcode": result[c].zipCode,
                        "party": result[c].party,
                        "candidates": result[c].office,
                        "description": result[c].description,
                        "picture": result[c].picture,
                    }
                    tempArr.push(obj);
                }
                reply(tempArr);
            });
        } else if(str == "abortion" || str == "dead babies"){ //easter egg
            var sql = "SELECT * FROM Issues NATURAL JOIN Users WHERE abortion = 1 AND office != 'Voter'";
            connection.query(sql, function (error, result) {
                if (error) {
                    throw error;
                }
                var tempArr =[];
                for(var c = 0 ; c < result.length; c++){
                    var obj = {
                        "username": result[c].username,
                        "firstname": result[c].firstName,
                        "lastname": result[c].lastName,
                        "email": result[c].email,
                        "phone": result[c].phone,
                        "zipcode": result[c].zipCode,
                        "party": result[c].party,
                        "candidates": result[c].office,
                        "description": result[c].description,
                        "picture": result[c].picture,
                    }
                    tempArr.push(obj);
                }
                reply(tempArr);
            });
        }
    }
});

//DONE JOSH
//%20
server.route({
    method: 'GET',
    path: '/candidate',
    handler: function (request, reply) {
        if(request.query.search.includes(" ")){
            var res = request.query.search.split(" ");

            var sql = "SELECT * FROM Users WHERE firstName ='" + res[0] + "'OR lastName = '" + res[1] + "' AND office != 'Voter'";
            connection.query(sql, function (error, result) {
                var tempArr =[];
                for(var c = 0 ; c < result.length; c++){
                    var obj = {
                        "username": result[c].username,
                        "firstname": result[c].firstName,
                        "lastname": result[c].lastName,
                        "email": result[c].email,
                        "phone": result[c].phone,
                        "zipcode": result[c].zipCode,
                        "party": result[c].party,
                        "candidates": result[c].office,
                        "description": result[c].description,
                        "picture": result[c].picture,
                    }
                    tempArr.push(obj);
                }
                reply(tempArr);
            });
        }
        else{
            var sql = "SELECT * FROM Users WHERE firstName ='" + request.query.search + "'OR lastName = '" + request.query.search + "' AND office != 'Voter'";
            connection.query(sql, function (error, result) {
                var tempArr =[];
                for(var c = 0 ; c < result.length; c++){
                    var obj = {
                        "username": result[c].username,
                        "firstname": result[c].firstName,
                        "lastname": result[c].lastName,
                        "email": result[c].email,
                        "phone": result[c].phone,
                        "zipcode": result[c].zipCode,
                        "party": result[c].party,
                        "candidates": result[c].office,
                        "description": result[c].description,
                        "picture": result[c].picture,
                    }
                    tempArr.push(obj);
                }
                reply(tempArr);
            });
        }
    }
});


//LOCATION STUFF
server.route({
    method: 'GET',
    path: '/locations',
    handler: function (request, reply) {
        var sql = "SELECT * FROM Locations";
        connection.query(sql, function (error, results) {
            reply(results);
        });
    }
});


///////////////////////////////
//PROFILE PAGE
////////////////////////////////
server.route({
    method: 'GET',
    path: '/profilePage/{username}',
    handler: function (request, reply) {
        connection.query("SELECT * FROM Users WHERE username= '" + encodeURIComponent(request.params.username) + "'", function (error, results, fields) {
            if (error)
                throw error;
            reply(results);
        });
    }
});







//LOGIN
server.route({
    method: 'POST',
    path: '/authentication',
    handler: function (request, reply) {
        var username = request.payload.username;
        var password = request.payload.password;
        var sql = "SELECT * FROM Users WHERE username = '" + username + "'AND thepassword='" + password + "'";
        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
            if (username == result[0].username) {
                var obj = {
                    "username": result[0].username,
                    "firstname": result[0].firstName,
                    "lastname": result[0].lastName,
                    "email": result[0].email,
                    "phone": result[0].phone,
                    "zipCode": result[0].zipCode,
                    "party": result[0].party,
                    "candidates": result[0].office,
                    "description": result[0].description,
                    "token": 'fake-jwt-token'
                }
                reply(obj);
            }
            else {
                //reply(500);
            }
        });
    }
});


//#6
server.route({
    method: 'GET',
    path: '/candidateContactInfo/{username}',
    handler: function (request, reply) {
        var sql = "SELECT email FROM Users WHERE username = '" + encodeURIComponent(request.params.username) + "'";
        connection.query(sql, function (err, result) {
            reply(result);
        });
    }
});

//#7
//they'll send a zipcode to search for and i return all candidates from that zip
server.route({
    method: 'GET',
    path: '/getNearbyCandidates/{username}',
    handler: function (request, reply) {
        var getZip = "SELECT zipCode FROM Users WHERE username = '" + encodeURIComponent(request.params.username) + "'";
        connection.query(getZip, function (err, result) {
            //reply(result);
            var sql = "SELECT firstName, lastName, candidateOffice FROM Users WHERE zipCode = '" + result[0].zipCode + "'";
            connection.query(sql, function (err, result) {
                reply(result);
            });
        });
    }
});



//KYLE STUFF

//add a comment to a post
server.route({
    method: 'POST',
    path: '/comment/addcomment',
    handler: function (request, reply) {
        var id = request.payload.id;
        var userName = request.payload.userName;
        var body = request.payload.body;
        var sql = "INSERT INTO Comments (id, userName, body) VALUES (" + "'" + id + "'" + ", " + "'" + userName + "'" + ", " + "'" + body + "'" + ")";
        console.log(sql);
        connection.query(sql, function (error, results, fields) {
            if (error)
                throw error;
            reply('Comment added');
        });
    }
});

//get comments from a post
server.route({
    method: 'GET',
    path: '/getcomment/{id}',
    handler: function (request, reply) {
        console.log(request.params.id );
        var sql = "SELECT * FROM Comments WHERE id = '" + encodeURIComponent(request.params.id) + "'"; //select all comments where comment id = incoming id
        connection.query(sql, function (error, results, fields) {
            if (error)
                throw error;
            reply(results);
        });
    }
});

//get posts from the chatboard
server.route({
    method: 'GET',
    path: '/allposts',
    handler: function (request, reply) {
        connection.query('SELECT * FROM Posts ORDER BY postdate DESC', function (error, results, fields) {
            if (error) {
                throw error;
            }
            reply(results);
        });
    }
});


//get posts from the chatboard
server.route({
    method: 'GET',
    path: '/allcomments',
    handler: function (request, reply) {
        connection.query('SELECT * FROM Comments', function (error, results, fields) {
            if (error) {
                throw error;
            }
            reply(results);
        });
    }
});

//add a post to the chatboard
server.route({
    method: 'POST',
    path: '/addpost',
    handler: function (request, reply) {
        var userName = request.payload.username;
        var body = request.payload.body;
        var tag1 = request.payload.tag1;
        var tag2 = request.payload.tag2;
        var tag3 = request.payload.tag3;
        var tag4 = request.payload.tag4;
        var likes = request.payload.likes;
        var sql = "INSERT INTO Posts (userName, body, tag1, tag2, tag3, tag4, id, likes) VALUES (" + "'" + userName + "'" + ", " + "'" + body + "'" + ", " + "'" + tag1 + "'" + ", " + "'" + tag2 + "'" + ", " + "'" + tag3 + "'" + ", " + "'" + tag4 + "'" + ", " + "'" + '000' + "'" + ", " + "'" + likes + "'" + ")";
        connection.query(sql, function (error, results, fields) {
            if (error)
                throw error;
            reply(200);
        });
    }
});


server.route({
    method: 'PUT',
    path: '/addlikes/{id}',
    handler: function (request, reply) {
        var sql = "UPDATE Posts SET likes=likes+1 WHERE id = " + request.params.id; //WHERE POSTS ID = INCOMING ID
        console.log(sql);
        connection.query(sql, function (error, results, fields) {
            if (error)
                throw error;
            reply('Like incremented');
        });
    }
});





server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});