const path = require('path')

//filename
console.log("File name is " + path.basename(__filename));

//directory name
console.log("Directory is " + path.dirname(__filename));

//extension name
console.log("Extension of file is " + path.extname(__filename))

//using path.delimiter (delimiter in windows OS is ';')
console.log(process.env.PATH.split(path.delimiter));

//parse -> creates path object
console.log(path.parse(__filename))

//path.join
console.log(path.join(__dirname,'test','ayush.js'));
