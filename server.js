/**
 * Created by rishabhshukla on 09/03/17.
 * This is a simple URL shortening service built using Express.js.
 * The service allows users to shorten URLs and expand them back using shortcodes.
 */

const express = require("express"); // Import Express framework
const bodyParser = require("body-parser"); // Import body-parser middleware to handle request bodies
const shortner = require("./shortner"); // Import the custom shortener module
const app = express(); // Create an Express application
const port = 4100; // Define the port on which the server will listen

// Middleware to parse JSON and URL-encoded data from the request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "static" directory
app.use(express.static("static"));

/**
 * Route to expand a shortened URL based on the shortcode provided.
 * @param {string} shortcode - The shortcode for the shortened URL.
 */
app.get('/:shortcode', (req, res) => {
    // Use the shortcode to retrieve the original URL
    shortner.expand(req.params.shortcode)
        .then((url) => {
            // Redirect to the original URL
            res.redirect(url);
        })
        .catch((error) => {
            // Handle errors (e.g., shortcode not found)
            console.error(`Error expanding shortcode: ${error}`);
            res.status(404).send("Shortcode not found."); // Send a 404 response
        });
});

/**
 * API endpoint to shorten a given URL.
 * @param {string} url - The URL to shorten, provided in the request body.
 */
app.post('/api/v1/shorten', (req, res) => {
    const url = req.body.url; // Retrieve the URL from the request body
    const shortcode = shortner.shorten(url); // Shorten the URL using the shortner module
    res.send({ shortcode }); // Send the shortcode as a JSON response
});

/**
 * API endpoint to expand a given shortcode into the original URL.
 * @param {string} shortcode - The shortcode to expand, provided in the request parameters.
 */
app.get('/api/v1/expand/:shortcode', (req, res) => {
    const shortcode = req.params.shortcode; // Retrieve the shortcode from the request parameters
    shortner.expand(shortcode) // Use the shortner module to expand the shortcode
        .then((url) => {
            res.send({ url }); // Send the original URL as a JSON response
        })
        .catch((error) => {
            // Handle errors (e.g., shortcode not found)
            console.error(`Error expanding shortcode: ${error}`);
            res.status(404).send("Shortcode not found."); // Send a 404 response
        });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log("Listening on port " + port);
});

// Uncomment the line below to test the shortener function
// console.log(shortner.shorten('http://google.com'));
