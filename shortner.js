/**
 * Created by rishabhshukla on 09/03/17.
 * This module provides functionality to shorten and expand URLs using Firebase as the backend.
 * It uses a simple hashing mechanism to create shortcodes for URLs.
 */

var firebase = require('firebase'); // Import the Firebase library
const r = require('convert-radix64'); // Import the radix64 conversion library
const hasha = require("hasha"); // Import the hasha library for hashing
const hashMap = {}; // In-memory hash map to store URL mappings

// Firebase configuration object with API keys and identifiers
var config = {
    apiKey: "AIzaSyBAAUCZ8xXzS4r7jxMhlvPB6OzKIC0MRE8",
    authDomain: "urlshortner-b1883.firebaseapp.com",
    databaseURL: "https://urlshortner-b1883.firebaseio.com",
    storageBucket: "urlshortner-b1883.appspot.com",
};

// Initialize Firebase application
firebase.initializeApp(config);

/**
 * Module exports for URL shortening and expanding functionalities.
 */
module.exports = {
    /**
     * Shortens a given URL by generating a shortcode.
     * @param {string} url - The URL to be shortened.
     * @returns {string} - The generated shortcode.
     */
    shorten: (url) => {
        // Generate a base64-encoded MD5 hash of the URL
        let hash = hasha(url, { encoding: "base64", algorithm: "md5" });
        // Take the first 4 characters of the hash
        hash = hash.slice(0, 4);

        // Replace characters to make the hash URL-safe
        hash = hash.replace('/', '-');
        hash = hash.replace('+', '_');

        // Store the mapping of shortcode to URL in the hashMap
        hashMap[hash] = url;

        // Write the URL data to Firebase using the generated shortcode
        writeUserData(url, r.from64(hash), hash);

        // Return the generated shortcode
        return hash;
    },

    /**
     * Expands a given shortcode to retrieve the original URL.
     * @param {string} shortcode - The shortcode to be expanded.
     * @returns {Promise<string>} - A promise that resolves to the original URL.
     */
    expand: (shortcode) => {
        return new Promise((resolve, reject) => {
            // Reject if the shortcode is undefined
            if (shortcode === undefined) {
                return reject(null);
            }

            // Reference to the specific location in the Firebase database using the shortcode
            var ref = firebase.database().ref('/' + r.from64(shortcode));

            // Retrieve the value from the Firebase database
            ref.once('value').then((snapshot) => {
                const val = snapshot.val(); // Get the data from the snapshot
                if (val) { // If a value is found
                    let url = val.url; // Retrieve the original URL
                    resolve(url); // Resolve the promise with the original URL
                } else {
                    // If not found in Firebase, check the in-memory hashMap
                    resolve(hashMap[shortcode]);
                }
            }).catch((error) => {
                // Reject the promise in case of any error while accessing Firebase
                reject(error);
            });
        });
    }
};

/**
 * Writes the URL data to Firebase database under the specified shortcode.
 * @param {string} url - The original URL to be stored.
 * @param {string} shortcode - The generated shortcode to be used as the key in the database.
 * @param {string} code - The shortcode code for retrieval purposes.
 */
const writeUserData = (url, shortcode, code) => {
    // Write the URL and shortcode information to Firebase
    firebase.database().ref('/' + shortcode).set({
        code: code,
        url: url
    }).catch((error) => {
        console.error("Error writing user data:", error); // Log any errors encountered during the write operation
    });
};
