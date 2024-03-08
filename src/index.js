const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const SERVER_PORT = process.env.PORT;
app.use(cors());


//#region SETUP_ROUTES

//#endregion SETUP_ROUTES

setupRoutes();



app.listen(SERVER_PORT,()=>{
    console.log("Running server on port:" + SERVER_PORT);
});