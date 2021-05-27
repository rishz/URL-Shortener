/**
 * Created by rishabhshukla on 09/03/17.
 */

// Express v4.16.0 and higher


const express = require("express");

const app = express();
const shortner = require("./shortner");
const port = 4100;

app.use(express.json);
app.use(express.urlencoded({extended:true}));

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("static"));

app.get('/:shortcode',(req,res) => {
    console.log("here is it home");
    shortner.expand(req.params.shortcode)
        .then((url) => {
            res.redirect(url);
        })
        .catch((error) => {
            console.log("error OCuurend");

        });
});

app.post('/api/v1/shorten', (req, res) => {
    console.log("here fnc called");
    let url = req.body.url;
    let shortcode = shortner.shorten(url);
    res.send(shortcode);

});

app.get('/api/v1/expand/:shortcode', (req, res) => {
    console.log("here getting data in reverse");

    let shortcode = req.body.shortcode;
    let url = url.expand(shortcode);
    res.send(url);

});

app.listen(port, () => {

    console.log("Listening on port "+port);

});

//console.log(shortner.shorten('http://google.com'));