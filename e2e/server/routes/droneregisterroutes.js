const server = require('../server.js');

exports.registerDrone = async function(request, response) {
    const drone = {
        "droneUserFirstName": request.body.droneUserFirstName,
        "droneUserLastName": request.body.droneUserLastName,
        "droneAlias": request.body.droneAlias,
        "droneFAANumber": request.body.droneFAANumber,
        "tagLicense": request.body.tagLicense,
        "licenseState": request.body.licenseState
    };
    server.connection.query(
        "INSERT INTO drones SET ?",
        drone,
        function(error, results, fields){
            if (error) {
                response.send({
                    "code": 400,
                    "failed": "An error occurred"
                });
            } else {
                response.send({
                    "code": 200,
                    "success": "Drone was registered successfully"
                });
            }
        }
    );
};