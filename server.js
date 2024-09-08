const express= require("express")
const app = express()
const mongooseConnection = require("./config/mongoose")
const userModel = require("./models/user")

app.get("/create",async(req,res)=>
{

   let createdmodel = await userModel.create({
      username: "aman",
      name: "aman",
      email: "xyz.com",
      password: "xeee"
   
}) 
   console.log("user created...")
})
 
app.get("/",(req,res)=>
{
  res.send("database")
})
       
 app.get("/read",async(req,res)=>{
     
   let user = await userModel.findOne({name:"aman"})
   res.send(user)
 })



// -------------------to find all users------------------>

app.get("/readall",async(req,res)=>
{
   let userall = await userModel.find({})
   res.send(userall)
})
    

app.get("/update",async(req,res)=>{
     
   let userUpdate = await userModel.findOneAndUpdate({name:"aman"},{name:"vaibhav"},{new:true})
   res.send(userUpdate)
 })


app.get("/delete",async(req,res)=>{
     
   let userDelete = await userModel.findOneAndDelete({name:"vaibhav"})
   res.send(userDelete)
 })


app.listen(3000,(req,res)=>
{
   console.log("server.............")
})
// findOneAndDelete: Returns the deleted document, which can be useful if you need the details of the document that was removed.

// deleteOne: Returns only the status of the operation (like the number of documents deleted), which is more efficient if you don't need the deleted document.