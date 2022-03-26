
 


const  fs = require('fs');
const http = require('http');
 
const port = 3000;
const hostName = '127.0.0.1';


const myServer = http.createServer((req,res)=>{  
   
    //HandleFile function..... 

    const handleFile = (statusCode , fileLocation) =>{
        fs.readFile(fileLocation ,(err,data)=>{
            res.writeHead(statusCode,{"content-type":"text/html"});
            res.write(data);
            res.end();
        })
    }

    //Home Routes
    if(req.url === '/'){
        handleFile(202 , "./views/index.html");
    }  
    
     //Contacts Routes
    else if(req.url === '/contact'){
        handleFile(202, "./views/contact.html",);
    } 

    //About me Routes
    else if(req.url === '/about'){
        handleFile(202,"./views/about.html");
    } 

    //Error page
    else{
        handleFile(404,"./views/error.html");
    }
 
});




myServer.listen(hostName,port,()=>{
    console.log(`This Server is successfylly ruiing at http://${hostName}:${port}`);
})   


 






/*
const fs = require('fs');
const http = require('http');
const { hostname } = require('os');
const port = 3000;
const hostName = '127.0.0.1';

const myServer = http.createServer((req,res)=>{  

    const handleFile = (statusCode,fileLocation) =>{
        fs.readFile(fileLocation,(err,data)=>{
            if(err){
                console.log(err);
            } 
            else{
                res.writeHead(statusCode,{"content-type": "text/html"}); 
                res.write(data);
                res.end();
            }
        })
    }

    if(req.url === '/'){
       handleFile(202,"./views/index.htnl");
    }
});


myServer.listen(port,hostName,()=>{
    console.log(`This Server is successfylly runnning at http://${hostName}:${port}`);
}
)

*/