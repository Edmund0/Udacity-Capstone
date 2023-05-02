
/**************************************/
/*      EXPRESS SERVER APP SETUP      */
/**************************************/

    // Require Express to run server and routes
    const express = require('express');

    // Start up an instance of app
    const app = express();

        /* Middleware*/
        // Require "Body-parser" for handling requests (Here we are configuring express to use body-parser as middle-ware).
        const bodyParser = require('body-parser');
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        // Require "Cors" for cross origin allowance
        const cors = require('cors');
        app.use(cors());

    // Initialize the main project folder
    app.use(express.static('client'));


/**********************************/
/*      EXPRESS SERVER SETUP      */
/**********************************/

    // Setup Server
    port = 8000;
    host = 'localhost';                                     // For testing only (DELETE HOST LATER)!

    function listening() {  
            const host = server.address().address;
            const port = server.address().port;
            console.log("Example app listening at http://%s:%s", host, port);
        }

    const server = app.listen(port, host, listening);       // For testing only (DELETE HOST LATER)!


/**********************************/
/*      EXPRESS ROUTES SETUP      */
/**********************************/

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

    // Add a GET route that returns the projectData object
    app.get('/projectData', function (request, response) {
        response.send(projectData); 
    })

    // Add a POST route that adds incoming data to the projectData object. (Confusion)
    app.post('/projectData', function (request, response) {

        let newEntry = request.body;

        projectData = newEntry; 
        console.log(projectData);
     })