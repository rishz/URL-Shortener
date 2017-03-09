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
    let url = shortner.expand(req.params.shortcode);
    res.redirect(url);
});
app.post('/api/v1/shorten',function (req, res) {
    let url = req.body.url;
    let shortcode = shortner.shorten(url);
    res.send(shortcode);

    // console.log(shortcode)

});
app.get('/api/v1/expand/:shortcode',function (req, res) {
    let shortcode = req.body.shortcode;    console.log(shortcode)
    let url = url.expand(shortcode);
    res.send(url);
});
app.listen(4100, function(){

    console.log("Listening on port 4100")

});

//console.log(shortner.shorten('http://google.com'));