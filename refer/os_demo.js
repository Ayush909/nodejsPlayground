const os =  require('os');

console.log(os.platform());

console.log(os.version());

console.log(os.arch());


//cpu core info
// console.log(os.cpus());

//memory info
console.log(os.totalmem());
console.log(os.freemem());

//uptime
let up = os.uptime();

console.log(up / (60 * 60));