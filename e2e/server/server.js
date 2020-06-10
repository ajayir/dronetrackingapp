//express: web server
const express = require('express');
//body-parser: Middleware for parsing incoming requests as JSON
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;
const app = express();
const login = require('./routes/loginroutes.js');

app.use(bodyParser.json());
app.use(cors());

app.post('/registerDrone', function(req, res){
    console.log(req.body);
    res.status(200).send({"message": "Data is received::"});
});

app.post('/register', login.register);

app.post('/login', login.login);

app.listen(PORT, function(){
    console.log("Server running localhost: " + PORT);
});
