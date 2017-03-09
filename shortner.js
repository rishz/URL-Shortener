/**
 * Created by rishabhshukla on 09/03/17.
 */

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

        return hash;

    },
    expand: function (shortcode) {
        return hashMap[shortcode];
    }
};
