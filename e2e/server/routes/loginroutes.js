const bcrypt = require('bcrypt');
const server = require('../server.js');

// Handler for User Registration
exports.register = async (request, response) => {
    const password = request.body.password;
    const encryptedPassword = await bcrypt.hash(password, 10);  // Hash password
    var users = {
        "username": request.body.username,
        "password": encryptedPassword,
        "email": request.body.email,
        "secretKey": request.body.secretKey
    };

    server.connection.query(
        "INSERT INTO users SET ?", 
        users, 
        function(error, results, fields){
            if (error) {
                response.send({
                    "code": 400,
                    "failed": "An error occurred"
                });
            } else {
                console.log(results);
                let payload = {
                    subject: results.insertId
                };
                let token = server.jwt.sign(payload, 'secretKey');

                response.status(200).send({token});
            }
        }
    );
}

// Handler for User Login
exports.login = async (request, response) => {
    const username = request.body.username;
    const password = request.body.password;

    server.connection.query(
        'SELECT * FROM users WHERE username = ?', 
        [username], 
        async function(error, results, fields){
            if (error) {
                response.send({
                    "code": 400,
                    "failed": "An error occurred"
                });
            } else {
                if (results.length > 0) {
                    const comparison = await bcrypt.compare(password, results[0].password);
                    if (comparison) {
                        console.log(results[0].id);
                        let payload = {subject: results[0].id};
                        let token = server.jwt.sign(payload, 'secretKey');
                        response.status(200).send({token})
                    } else {
                        response.send({
                            "code": 204,
                            "success": "Username and Password do not match"
                        });
                    }
                } else {
                    response.send({
                        "code": 206,
                        "success": "Username does not exist"
                    });
                }
            }
        }
    );
};

exports.resetPassword = async function(request, response) {
    const userprofile = {
        "username": request.body.username,
        "secretKey": request.body.secretKey
    }
    const newPassword = await bcrypt.hash(request.body.password, 10);
    server.connection.query(
        'SELECT * FROM users WHERE username = ? AND secretKey = ?',
        [userprofile.username, userprofile.secretKey],
        function(error, results, fields) {
            if (error) {
                response.send({
                    "code": 400,
                    "failed": "An error occurred 1"
                });
            } else {
                server.connection.query(
                    "UPDATE users SET ?",
                    {"password": newPassword},
                    function(error, results, fields) {
                        if (error) {
                            response.send({
                                "code": 400,
                                "failed": "UPDATE query failed internally"
                            });
                        } else {
                            response.send({
                                "code": 200,
                                "success": "Password reset was successful"
                            });
                        }
                    }
                );
            }
        }
    );
};