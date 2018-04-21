'use strict';
const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: '0.0.0.0', 
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
    user: 'mark',
    password: 'abc123',
    database: 'cse3330'
});

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
        //reply(request.payload);
        var username = request.payload.username;
        var password = request.payload.password;
        var sql = "SELECT username, thePassword FROM Users WHERE username = '" + username+ "'";
        connection.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
            if (username== result[0].username) {
                if (password == result[0].thePassword) {
                    reply(200);
                }
                else {
                    reply("Not correct password");
                }
            }
            else {
                reply("Username is not contained");
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
        var oldPassword = request.payload.oldpassword;
        var newPassword = request.payload.newpassword;
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

server.route({
    method: 'PUT',
    path: '/updateIssues/{username}',
    handler: function (request, reply) {
        var econJobs = request.payload.issue1Econ;
        var immigration = request.payload.issue2Immi;
        var healthCare = request.payload.issue3HealthCare;
        var budget = request.payload.issue4Budget;
        var environment = request.payload.issue5Envir;
        var abortion = request.payload.issue6Abortion;
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
            console.log("okay we gucci");
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
            console.log("okay we gucci");
        }

        var email = request.payload.email;
        if (last != null) {
            sql = "UPDATE Users SET email = '" + email + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
                //reply('It worked');
            });
        }
        else {
            console.log("okay we gucci");
        }

        var phone = request.payload.phone;
        if (last != null) {
            sql = "UPDATE Users SET phone = '" + phone + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
                //reply('It worked');
            });
        }
        else {
            console.log("okay we gucci");
        }

        var description = request.payload.description;
        if (last != null) {
            sql = "UPDATE Users SET description = '" + description + "' WHERE username = '" + encodeURIComponent(request.params.username) + "'";
            connection.query(sql, function (error, results, fields) {
                if (error)
                    throw error;
                //reply('It worked');
            });
        }
        else {
            console.log("okay we gucci");
        }
        reply(200);
    }
});





///////////////////////////////////////////
//SEARCH STUFF
///////////////////////////////////////////

server.route({
    method: 'GET',
    path: '/searchbyzip/{zipcode}',
    handler: function (request, reply) {
        var sql = "SELECT * FROM Users WHERE zipCode ='" + encodeURIComponent(request.params.zipcode) + "'";
        connection.query(sql, function (error, results) {
            reply(results);
        });
    }
});

server.route({
    method: 'GET',
    path: '/searchbyissues/{issue}',
    handler: function (request, reply) {
        var sql = "SELECT * FROM Issues NATURAL JOIN Users WHERE " + encodeURIComponent(request.params.issue) + "= 1";
        connection.query(sql, function (error, results1) {
            if (error) {
                throw error;
            }
            reply(results1);
     });

    }
});

server.route({
    method: 'GET',
    path: '/searchbyname/{firstname}/{lastname}',
    handler: function (request, reply) {
        var sql = "SELECT * FROM Users WHERE firstName ='" + encodeURIComponent(request.params.firstname) + "'AND lastName = '" + encodeURIComponent(request.params.lastname) + "'";
        connection.query(sql, function (error, results) {
            reply(results);
        });
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
        connection.query('SELECT * FROM Users WHERE username= ' + encodeURIComponent(request.params.firstname) + "'", function (error, results, fields) {
            if (error)
                throw error;
            reply(results);
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




server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});