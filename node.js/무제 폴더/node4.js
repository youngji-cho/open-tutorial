const os=require('os');

/*
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
*/

const url = require('url');
console.log(url.parse('http://www.fermi.me/rec_price'));

const querystring=require('querystring');
console.log(querystring.parse('https://ridibooks.com/v2/Detail?id=1170000032'));

const crypto = require('crypto');

const shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
const output =shasum.digest('hex');

console.log('crypto_hash',output);
