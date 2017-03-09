/**
 * Created by rishabhshukla on 09/03/17.
 */

const hasha = require("hasha");

module.exports = {
    shorten: function (url) {
        hash =  hasha(url, {encoding:"base64", algorithm:"md5"});
        hash = hash.slice(0,4);

        hash = hash.replace('/','-');
        hash = hash.replace('+','_');
        // let hashInt = parseInt(hash,16)
        // conv = atob(hashInt);
        return hash;

    },
    expand: function (shortcode) {
        if(shortcode=='xyz'){
            return 'http://google.com';
        }
    }
};
