const bcrypt = require('bcrypt');
const server = require('../server.js');
// Handler for User Registration
exports.register = async function (request, response) {
    const password = request.body.password;
    const encryptedPassword = await bcrypt.hash(password, 10);  // Hash password
    var users = {
        "username": request.body.username,
        "password": encryptedPassword
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
                response.send({
                    "code": 200,
                    "success": "User registered successfully"
                });
            }
        }
    );
}

// Handler for User Login
exports.login = async function(request, response) {
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
                        response.send({
                            "code": 200,
                            "success": "Login successful",
                            "data": true
                        });
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
}