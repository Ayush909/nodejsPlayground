const url = require('url');

const myUrl = new URL('https://www.ayush.com:22/x/y/z.html?id=99&age=24');

console.log(myUrl.href);
console.log(myUrl.hostname);
console.log(myUrl.host);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams);
