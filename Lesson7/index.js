

/* 
const http = require('http');
const port = 3000;
const hostName = '127.0.0.1';  


const myServer = http.createServer((req,res)=>{
    res.end("<h1> Inside the node.js Server </h1>");
});

myServer.listen(port , hostName , ()=>{
    console.log(`This Server is Successfully running at http://${hostName}:${port}`);
})

*/ 

const http = require('http');
const { hostname } = require('os');
const port = 3000;
const hostName = '127.0.0.1';


const myServer = http.createServer((req,res)=>{ 

    res.writeHead(202,{'content-type':'text/html'});
    res.write("<h1> This is node Server </h1>>");
    res.end();
});

myServer.listen(port,hostName,()=>{
    console.log(`This Server is successfylly ruiing at http://${hostName}:${port} `);
})