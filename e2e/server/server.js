const express = require('express'); //express: web server
const bodyParser = require('body-parser'); //body-parser: Middleware for parsing incoming requests as JSON
const cors = require('cors'); //allow cross-origin
const login = require('./routes/loginroutes.js');
const drones = require('./routes/droneregisterroutes.js');
const fs = require('fs');
const https = require('https');
const app = express();
const PORT = process.env.PORT || 8001;
const mysql = require('mysql');
const jwt = require('jsonwebtoken'); //express session
const options = {
    key: fs.readFileSync('./localhost.key'),
    cert: fs.readFileSync('./localhost.cert'),
    requestCert: false,
    rejectUnauthorized: false
}
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
exports.connection = connection; //Export connection for use in routes
exports.jwt = jwt;

app.use(bodyParser.json());
app.use(cors());

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
        return res.status(401).send('Unauthorized request');
    }
    let token = req.headers.authorization.split(' ')[1];
    if(token === null) {
        return res.status(401).send('Unauthorized request');
    }
    let payload = jwt.verify(token, 'secretKey');
    if(!payload) {
        return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();
}

app.post('/register', login.register);
app.post('/login', login.login);
app.post('/resetpassword', login.resetPassword);
app.post('/registerDrone', verifyToken, drones.registerDrone);
app.get('/getRegisteredDrones', verifyToken, drones.getRegisteredDrones);

https.createServer(options, app)
    .listen(PORT, function(){
    console.log("Server running on localhost: " + PORT);
});
