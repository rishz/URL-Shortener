/**
 * Created by rishabhshukla on 09/03/17.
 */


const express = require("express");

const app = express();

app.use(express.static("static"));
app.listen(3000, function(){

    console.log("Listening on port 3000")

});