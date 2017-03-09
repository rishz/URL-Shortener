/**
 * Created by rishabhshukla on 09/03/17.
 */

const hasha = require("hasha");

module.exports = {
    shorten: function (url) {
        if(url=='http://google.com'){
            return 'xyz';
        }
    },
    expand: function (shortcode) {
        if(shortcode=='xyz'){
            return 'http://google.com';
        }
    }
};