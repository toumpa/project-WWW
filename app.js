//i tried to make the node.js - express but it did not work 


// const express = require('express');
// const fs = require("fs");
// const bodyParser = require('body-parser');
// const app = express();
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// const port = process.env.port || 5500;

// let aFileName1 = __dirname + '/comedy.json';
// let aFileName2 = __dirname + '/tragedy.json';
// let aFileName3 = __dirname + '/romance.json';

function validate() //authentication 
{
    //check if data is accurate
    if(  
        document.getElementById("text1").value == "user" //username
        && document.getElementById("text2").value == "user" //password
    )
    {
        alert( "validation succeeded" ); //pop ap window


        // function getComedy(req, res) {
        //     fs.readFile(aFileName1, function (err, data) {
        //         let comedies = [];
        //         if (!err) comedies = JSON.parse(data);
        //         res.status(200).json(comedies);
        //     });

        //     fs.readFile(aFileName2, function (err, data) {
        //         let tragedies = [];
        //         if (!err) tragedies = JSON.parse(data);
        //         res.status(200).json(tragedies);
        //     });

        //     fs.readFile(aFileName3, function (err, data) {
        //         let romances = [];
        //         if (!err) romances = JSON.parse(data);
        //         res.status(200).json(romances);
        //     });
        // }

        
    }
    else //if data is false
    {
        alert( "validation failed" );
    }
}