/**
 * Created by rishabhshukla on 09/03/17.
 */


const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const shortner = require("./shortner");
const port = 4100;
const dns = require('dns');


app.use(bodyParser.urlencoded({extend:false}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("static"));

app.get('/:shortcode', (req,res) => {

    shortner.expand(req.params.shortcode)
        .then((url) => {
            res.redirect(url);
        })
        .catch((error) => {

        });
})

const links = [];
let id = 0;
app.post('/api/shorturl/new',(req,res)=>{
    const {url}=req.body;
    const noHTTPSurl = url.replace(/^https?:\/\//,'');

    //check if this URL is valid
    dns.lookup(noHTTPSurl,(err)=>{

        if(err){
            return res.json({
                error:"invalid URL"
            });
        }else{

            //increment id
            id++;
            //Create new entry for our arr
            const link = {

                orignal_url: url,
                short_url: `${id}`
            };

            links.push(link);
            //return this new  entry
            console.log(links);

            return res.json(link);
        }

    });

});

 app.get('/api/shorturl/:id',(req,res)=>{

     const {id} =req.params;
     console.log('id from query',id)
     const  link =  links.find(l => l.short_url === id);
     console.log('link found',link);
     if (link){
         return res.redirect(link.orignal_url);
     }else {
         return  res.json({
             error:'No short url'
         });
     }


});

app.post('/api/v1/shorten', (req, res) => {

    let url = req.body.url;


    let shortcode = shortner.shorten(url);
    res.send(shortcode);

});


app.get('/api/v1/expand/:shortcode', (req, res) => {


    let shortcode = req.body.shortcode;
    let url = url.expand(shortcode);
    res.send(url);

});

app.listen(port, () => {

    console.log("Listening on port "+port);

});

//console.log(shortner.shorten('http://google.com'));