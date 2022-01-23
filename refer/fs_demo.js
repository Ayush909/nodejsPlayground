const fs = require('fs');
const path = require('path');


//making a directory aka folder
fs.mkdir(path.join(__dirname,'/test'),{},(err)=>{
    if(err) throw err;

    console.log("Folder Created!");
})

//create and writing a file into folder created
fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World!',(err)=>{
    if(err) throw err;
    console.log("File Wrtitten!");

    fs.appendFile(path.join(__dirname,'/test','hello.txt'),' I love Node Js',(err)=>{
        if(err) throw err;
        console.log("File Appended!");
    })
})


//reading the file "hello.txt"
fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);
})

//renaming the file "hello.txt"
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','hello2.txt'),(err)=>{
    if(err) throw err;
    console.log("File renamed");
})