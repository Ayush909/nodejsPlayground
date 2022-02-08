const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {


    let filepath = path.join(__dirname,'public',req.url === '/' ? 'index.html' : req.url);

    let extname = path.extname(filepath);

    // Initial content type
    let contentType = "text/html";

    // Check ext and set content type
    switch (extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    }

    // Check if contentType is text/html but no .html file extension
    if (contentType == "text/html" && extname == "") filepath += ".html";


    // console.log(filepath,extname);

    fs.readFile(filepath,(err,content)=>{

        if(err){

            if(err.code == 'ENOENT'){
                fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
                    res.writeHead(404,{"Content-Type": 'text/html'});
                    res.end(content,"utf-8");
                })
            }else{
                //server 500 error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }

        }else{
            res.writeHead(200,{ "Content-Type" : contentType });
            res.end(content,"utf-8");
        }

    })

   


    // if(req.url === '/'){

    //     fs.readFile(path.join(__dirname,'public','index.html') , (err,content)=>{
    //         if(err) throw err;
    //         res.writeHead(200, {
    //             'Content-type' : 'text/html'
    //         })
    //         res.end(content);
    //     })        
    // }else if(req.url === '/about'){

    //     fs.readFile(path.join(__dirname,'public','about.html') , (err,content)=>{
    //         if(err) throw err;
    //         res.writeHead(200, {
    //             'Content-type' : 'text/html'
    //         })
    //         res.end(content);
    //     }) 
    // }
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})