/**
 * Created by championswimmer on 25/11/16.
 */

const r = require('./index.js');

console.log('Test to 64');
console.log(r.to64(0));
console.log(r.to64(10));
console.log(r.to64(100));
console.log(r.to64(1000));
console.log(r.to64(10000));


console.log('Test from 64');
console.log(r.from64("0"));
console.log(r.from64("1A"));
console.log(r.from64("10A"));
console.log(r.from64("100A"));
console.log(r.from64("156A"));
