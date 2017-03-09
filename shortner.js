/**
 * Created by rishabhshukla on 09/03/17.
 */
var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyBAAUCZ8xXzS4r7jxMhlvPB6OzKIC0MRE8",
    authDomain: "urlshortner-b1883.firebaseapp.com",
    databaseURL: "https://urlshortner-b1883.firebaseio.com",
    storageBucket: "urlshortner-b1883.appspot.com",
};
firebase.initializeApp(config);
const hasha = require("hasha");
const hashMap = {};
module.exports = {
    shorten: function (url) {
        hash =  hasha(url, {encoding:"base64", algorithm:"md5"});
        hash = hash.slice(0,4);

        hash = hash.replace('/','-');
        hash = hash.replace('+','_');
        // let hashInt = parseInt(hash,16)
        // conv = atob(hashInt);

        hashMap[hash] = url;
        writeUserData(url,hash);

        return hash;

    },
    expand: function (shortcode) {
        return hashMap[shortcode];
    }

};

function writeUserData(url,shortcode) {
    firebase.database().ref().set({
        url: url,
        shortcode: shortcode,
    });
}
