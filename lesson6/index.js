
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
    res.end("<h1> Learing Node Server...");
});

myServer.listen(port,hostName,()=>{
    console.log(`This Server is successfylly ruiing at http://${hostName}:${port} `);
})