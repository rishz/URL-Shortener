/**
 * Created by championswimmer on 25/11/16.
 */

const BASE64_ALPHABET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";
const R64Arr = BASE64_ALPHABET.split("");
const R64Dict = {};
for (let i = 0; i < 64; i++) {
    R64Dict[R64Arr[i]] = i
}

function get64bitChar (index) {
    if (index > 63) {
        return new Error("This is invalid index");
    }
    return (R64Arr[index]);
}
function getInt(char) {
    return(R64Dict[char])
}
function convertTo64 (givenInt) {
    if (givenInt < 64) {
        return get64bitChar(givenInt)
    }
    return '' + convertTo64(Math.floor(givenInt/64)) + get64bitChar(givenInt & 63)
}

function convertFrom64(givenString) {
    let digits = givenString.split("").reverse();
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += (getInt(digits[i])) * (Math.pow(64, i));
    }
    return sum;
}

module.exports = {
    to64: function (givenInt) {
        return convertTo64(givenInt, "")
    },
    from64: function(givenString) {
        if (givenString.length > 9) {
            return new Error("This will be larger than integer Javascript can handle")
        }
        return convertFrom64(givenString);
    }
};

