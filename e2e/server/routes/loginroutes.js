const bcrypt = require('bcrypt');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Flexy1958!",
    database: "drone_zone"
});

connection.connect(function(error){
    if (error) { 
        throw error;
    } else {
        console.log("::: Connected to database :::"); 
    }
});

// Handler for User Registration
exports.register = async function (request, response) {
    const password = request.body.password;
    const encryptedPassword = await bcrypt.hash(password, 10);  // Hash password
    var users = {
        "username": request.body.username,
        "password": encryptedPassword
    };

    connection.query('INSERT INTO users SET ?', users, function(error, results, fields){
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
    });
}

// Handler for User Login
exports.login = async function(request, response) {
    const username = request.body.username;
    const password = request.body.password;

    connection.query(
        'SELECT * FROM users WHERE username = ?', 
        [username], 
        async function(error, results, fields){
            if (error) {
                response.send({
                    "code": 400,
                    "failed": "An error occurred"
                })
            } else {
                if (results.length > 0) {
                    const comparison = await bcrypt.compare(password, results[0].password);
                    if (comparison) {
                        response.send({
                            "code": 200,
                            "success": "Login successful"
                        })
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