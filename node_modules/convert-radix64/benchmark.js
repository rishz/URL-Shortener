/**
 * Created by championswimmer on 25/11/16.
 */

var r = require('./index');

function runXtimesto64(X) {
    console.log("Run " + X + " times to64");
    let startTime = (new Date()).getTime();
    for (let i = 0; i < X; i++) {
        r.to64(i);
    }
    let timeTaken = (new Date()).getTime() - startTime;
    console.log("Time taken = " + timeTaken + "ms");
}
function runXtimesfrom64(X) {
    console.log("Run " + X + " times from64");
    let startTime = (new Date()).getTime();
    for (let i = 0; i < X; i++) {
        r.from64(i.toString());
    }
    let timeTaken = (new Date()).getTime() - startTime;
    console.log("Time taken = " + timeTaken + "ms");
}

runXtimesto64(1000000);
runXtimesfrom64(1000000);