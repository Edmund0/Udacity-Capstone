
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

    // Prevents Fetch from being rejected due to it coming from a different domain
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

/**********************************/
/*      EXPRESS SERVER SETUP      */
/**********************************/

    // Setup Server
    port = 8081;
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

const generalAnalysis = require('./allAPI')

/* BASIC ROUTES FOR API */
let formData = ""

    app.post('/sendData', async function (req, res) {
        
        formData = req.body.formData
        try {res.send(await generalAnalysis(formData));

        }catch {
            res.send({"error": "invalid destination"});
        }

    })

