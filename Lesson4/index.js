

// File System all module is including here.... 

const { resolveObjectURL } = require('buffer');
const fileSystem = require('fs');
const { clearScreenDown } = require('readline');
  

/*  
   // This is readFile all Syntax....

  fileSystem.writeFile("demo1.txt", "This is Demo One File " , (err) =>{
      if(err){
          console.log(err);
      } 
      else{
          console.log("Successfylly Created This File");
      }
  })

  */    
  

  /* 
   // All the syntax for appending file system....

  fileSystem.appendFile("demo1.txt", "Adding this text here", (err) =>{
      if(err){
          console.log(err);
      }
      else{
          console.log("Successfylly Appended This text");
      }
  }) 

  */ 
    
  /* 

      // All syntax for readfile ....
     fileSystem.readFile("demo1.txt","utf-8",(err,data)=>{
         if(err){
             console.log(err);
         } 
         else{
             console.log(data);
         }
     })

     */  
    
    
     /* 
       // All syntax for rename the file system  

     fileSystem.rename("demo1.txt", "demo2.txt", (err) =>{
         if(err){
             console.log(err);
         } 
         else{
             console.log("Renamed successfylly");
         }
     }) 

     */ 
  

     /* 

       // Syntex for deleting module 
     fileSystem.unlink("demo2.txt",(err)=>{
         if(err){ 
              console.log(err);
         } 
         else{
             console.log('This file is deletes successfully');
         }
     })

  */  

     /* 
      // Exists or not exists file all syntax ..... 

     fileSystem.exists("demo2.txt",(result)=>{
          
        if(result){
            console.log("Exist this file");
        }
        else{
            console.log("Don't exists this file");
        }
     }); 

     */ 