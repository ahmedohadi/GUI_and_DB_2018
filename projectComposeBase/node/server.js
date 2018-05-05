//Server.js 
//Written by Joshua Sylvester and Kyle Zhu
//Chatboad DB Spring 2018

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

connection.connect(function (err) {
});

//A test method
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        console.log('Server processing a / request');
        reply('Hello, Man!');
    }
});

///////////////////////////////////////////////////
//Sign Up and Log in
////////////////////////////////////////////////////

//SINGUP
//Written by Joshua Sylvester
//The signup route that is called whenever a new user is added on the sign up page.
//It receives a user's basic information.
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
                var sql = "INSERT INTO Users (firstName, lastName, email, username, thepassword, phone, zipCode, party, office, picture) VALUES (" + "'" + firstName + "'" + ", " + "'" + lastName + "'" + ", " + "'" + email + "'" + ", " + "'" + username + "'" + ", " + "'" + password + "'" + ", " + null  + ", '" + zipCode + "'" + "," + "'" + party + "'" + ", " + "'" + office + "'" + ", " + "'placeholder.png')";
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
                reply(600);
            }
        });
    }
});


//LOGIN
//Written by Joshua Sylvester
//Login route that is called whenever the user logs in. It verifies the entered username and password
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
//Written by Joshua Sylvester
//Update candidacy route that updates a user's office and party. 
//This method will be called from the update account page.
server.route({
    method: 'POST',
    path: '/updateCandidacy/{username}',
    handler: function (request, reply) {
        var office = request.payload.position;
        var party = request.payload.party;
        var sql1 = "UPDATE Users SET office = '" + office + "', party = '" + party + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
        connection.query(sql1, function (err, result) {
            if (err) {
                throw err;
            }
            reply(encodeURIComponent(request.params.username));
        });
    }
});

//Update Password
//Written by Joshua Sylvester
//Update password route that updates a user's password. It checks to make sure the user entered the correct
//old password before updating the password to the new one. 
server.route({
    method: 'PUT',
    path: '/updatePassword/{username}',
    handler: function (request, reply) {
        var oldPassword = request.payload.oldPassword;
        var newPassword = request.payload.newPassword;
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
                reply("Incorrect old password");
            }
        });
    }
});

//Update Issues
//Written by Joshua Sylvester
//The update issues route which adds a user's issues to the issues tables. 
//It receives all the issues that were selected and updates the table appropriately. 
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
//Written by Joshua Sylvester
//Update Account route which updates a users account information depending on what information they update.
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
            });
        }

        var last = request.payload.lastname;
        if (last != null) {
            sql = "UPDATE Users SET lastName = '" + last + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
            });
        }

        var email = request.payload.email;
        if (email != null) {
            sql = "UPDATE Users SET email = '" + email + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
            });
        }

        var zipcode = request.payload.zipcode;
        if (zipcode != null) {
            sql = "UPDATE Users SET zipCode = '" + zipcode + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
            });
        }

        var phone = request.payload.phone;
        if (phone != null) {
            sql = "UPDATE Users SET phone = '" + phone + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
            });
        }

        var description = request.payload.description;
        if (description != null) {
            sql = "UPDATE Users SET description = '" + description + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
            });
        }

        var candidates = request.payload.candidates;
        if (candidates != null) {
            sql = "UPDATE Users SET office = '" + candidates + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
            });
        }

        var party = request.payload.party;
        if (party != null) {
            sql = "UPDATE Users SET party = '" + party + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
            });
        }
        reply(200);
    }
});

///////////////////////////////////////////////////
//Searches
////////////////////////////////////////////////////
//search by zipcode
//Written by Joshua Sylvester and Kyle Zhu
//Search route that searches for candidates by zipcode. Any user labeled voter will not be returned as
//they are not a candidate. 
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

//Written by Joshua Sylvester and Kyle Zhu
//Search by issues
//Search route that searches for users by issues. It returns all candidates with the inputed issue.
//It does not return users who are voters. 
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
        } else if(str == "abortion"){
            var sql = "SELECT * FROM Issues NATURAL JOIN Users WHERE abortion = 1 AND office != 'Voter'";
            connection.query(sql, function (error, result) {
                if (error) {
                    throw error;
                }
                var tempArr =[];
                console.log(result);
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

//Written by Joshua Sylvester
//Search by candidate by name
//Search route that searches for candidates names. Either first name, last name, or both.
//It does not return any users who are categorized as voters. 
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


//Written by Joshua Sylvester
//LOCATION STUFF
//A routet that returns all of the locations stored in the locations table. 
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


//Written by Joshua Sylvester
// //PROFILE PAGE
//Profile Page route that returns all information about a user so that it can be displayed on a profile page
server.route({
    method: 'GET',
    path: '/profilePage/{username}',
    handler: function (request, reply) {
        connection.query("SELECT * FROM Users NATURAL JOIN Issues LEFT JOIN History ON (Users.username = History.username) WHERE Users.username ='" + encodeURIComponent(request.params.username) + "'", function (error, results, fields) {
            if (error)
                throw error;
                var issuesArr =[];
                if(results[0].econJobs){
                    issuesArr.push("The Economy and Jobs");
                }
                if(results[0].immigration){
                    issuesArr.push("Immigration");
                }
                if(results[0].healthCare){
                    issuesArr.push("Healthcare");
                }
                if(results[0].globalWarming){
                    issuesArr.push("Environment and Global Warming");
                }
                if(results[0].budget){
                    issuesArr.push("Federal deficit and budget");
                }
                if(results[0].abortion){
                    issuesArr.push("Abortion");
                }
                var historyArr = [];
                historyArr.push(results[0].vote1);
                historyArr.push(results[0].vote2);
                historyArr.push(results[0].vote3);
                historyArr.push(results[0].vote4);
                historyArr.push(results[0].vote5);
                historyArr.push(results[0].vote6);
                historyArr.push(results[0].vote7);
                historyArr.push(results[0].vote8);
                historyArr.push(results[0].vote9);
                historyArr.push(results[0].vote10);
                var obj = {
                    "username": encodeURIComponent(request.params.username),
                    "firstname": results[0].firstName,
                    "lastname": results[0].lastName,
                    "email": results[0].email,
                    "phone": results[0].phone,
                    "zipcode": results[0].zipCode,
                    "party": results[0].party,
                    "candidates": results[0].office,
                    "description": results[0].description,
                    "picture": results[0].picture,
                    "issues":issuesArr,
                    "historyArr":historyArr
                }
            reply(obj);
        });
    }
});


//Authentication
//Written by Joshua Sylvester
//A route for authenctication that will be used to track users throughout they're use of the site. 
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
                    "zipcode": result[0].zipCode,
                    "party": result[0].party,
                    "candidates": result[0].office,
                    "description": result[0].description,
                    "picture": result[0].picture,
                    "token": 'fake-jwt-token'
                }
                reply(obj);
            }
            else {
            }
        });
    }
});

//written by Kyle Zhu
//add a comment to a post
//It contains a post ID so the comment knows where it attaches it, the userName of the commenter, and a comment body
//Comments cannot be liked
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
            reply(200);
        });
    }
});

//written by Kyle Zhu
//get comments from a post
//Get the comments of a post associated with a specific post ID
//It receives the post ID as a paramater and retrieves all the comment fields from that post
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

//written by Kyle Zhu
//get posts from the chatboard
//Returns all fields from the posts table
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

//written by Kyle Zhu
//get all comments from the chatboard
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

//delete Post
//written by Joshua Sylvester
//A route that deletes a post by the post id
server.route({
    method: 'DELETE',
    path: '/deletePost/{id}',
    handler: function (request, reply) {
        connection.query("DELETE FROM Posts WHERE id='" + encodeURIComponent(request.params.id) + "'", function (error, results, fields) {
            if (error) {
                throw error;
            }
            reply(200);
        });
    }
});

//Add post route
//written by Kyle Zhu
//Add a post to the post table (effectively the chatboard)
//Posts contain a username, the post body, tags, id, and the number of likes
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

//Increment likes
//written by Kyle Zhu
//Increments the likes on a post by post id
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