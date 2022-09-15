const express = require('express')

const path = require('path')

const bodyparser = require ('body-parser')

const db = require ('./config')

const app = express()

var mongoose = require('mongoose')

var Schema = mongoose.Schema

var friendsSchema = new Schema({      
    name: { type: String   },       
    address: { type: String   },     
    email: { type: String },       
    contact: { type: String },       
},{ versionKey: false });  

var model = mongoose.model('friends', friendsSchema, 'friends');

app.use(bodyparser.urlencoded({extended:true, limit:'5mb'}));  

app.use(bodyparser.json({limit:'5mb'}))

let srcpath = path.resolve(__dirname, "../lastone/public")

app.use(express.static('public'))

const port = 4000

//api for get data from database  
app.get("/api/getdata",function(req,res){   
    model.find({},function(err,data){  
               if(err){  
                   res.send(err);  
               }  
               else{             
                   res.send(data);  
                   }  
           });  
   })  
     
     
   //api for Delete data from database  
   app.post("/api/Removedata",function(req,res){   
    model.remove({ _id: req.body.id }, function(err) {  
               if(err){  
                   res.send(err);  
               }  
               else{    
                      res.send({data:"Record has been Deleted..!!"});             
                  }  
           });  
   })  
     
     
   //api for Update data from database  
   app.post("/api/Updatedata",function(req,res){   
    model.findByIdAndUpdate(req.body.id, { name:  req.body.name, address: req.body.address, contact: req.body.contact,email:req.body.email },   
   function(err) {  
    if (err) {  
    res.send(err);  
    return;  
    }  
    res.send({data:"Record has been Updated..!!"});  
    });  
   })    
     
     
   //api for Insert data from database  
   app.post("/api/savedata",function(req,res){   
          
       var mod = new model(req.body);  
           mod.save(function(err,data){  
               if(err){  
                   res.send(err);                
               }  
               else{        
                    res.send({data:"Record has been Inserted..!!"});  
               }  
           });  
   })  

app.get('/',(req,res) => {
    console.log("about to send the html file")
    res.sendFile(srcpath + "/index.html")
    console.log("sent the html file")
})
//server stat on given port
app.listen(port,()=>{
    console.log("App is listening on port 4000")
})

// call by default index.html page  
/*app.get("*",function(req,res){   
    res.sendFile(srcpath +'/index.html');  
}) */ 
  
