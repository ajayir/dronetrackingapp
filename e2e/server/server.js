const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());


app.post('/registerDrone', function(req, res){
    //console.log(req.body);
    res.status(200).send({"message": "Data is received::"});
});

app.listen(PORT, function(){
    console.log("Server running localhost: " + PORT);
});
