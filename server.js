/**
 * Created by rishabhshukla on 09/03/17.
 */


const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const shortner = require("./shortner");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("static"));
app.get('/:shortcode',(req,res) => {
    let URL = shortner.expand(req.params.shortcode);
    res.redirect(url);
});
// app.listen(3000, function(){
//
//     console.log("Listening on port 3000")
//
// });

console.log(shortner.shorten('http://google.com'));