const express=require("express");
const router=express.Router()
const app=express()
const Posts=require("./models/posts")
const bodyParser=require("body-parser")
//importing mongoose package
const mongoose=require("mongoose");
//connecting to mongodb database
mongoose.connect("mongodb://localhost:27017/test",{useNewUrlParser:true},()=>{console.log("connected to db")})
app.listen(4000,()=>{console.log("listening")})
app.use(bodyParser.json())

app.post("/",async(req,res)=>{
    const post=new Posts({
        title:req.body.title,
        author:req.body.author,
        year:req.body.year,
        published:req.body.published,
    })
    try{
        await post.save();
        res.send({status:"true",message:"saved"})
    }
    catch(err)
    {
        res.send(err.message);
    }
    console.log(req.body)
    res.send("done")
})

//delete the desired data
app.delete('/:id',async(req,res)=>{
    try{
        await Posts.remove({_id:req.params.id});
        res.send({status:'true',message:"post delete successfully"});
    }
    catch(err)
    {
        res.send(err.message)
    }
})

//change the sorting the any data
app.get('/sorts',async(req,res)=>{
    try{
        const post=await Posts.find().sort({year:1});
        res.json(post)
    }
    catch(err)
    {
        res.send(err.message)
    }
})

//update the data
app.patch('/:id',async(req,res)=>{
    try{
        const post=await Posts.findByIdAndUpdate(req.params.id,{$set:req.body})
    }
    catch(err)
    {
        res.send(err.message)
    }
})
//to retrieve data
app.get("/",async(req,res)=>{
    try{
        const posts=await Posts.find()
        res.json(posts)
    }
    catch(err) 
    {
        res.json({message:err.message})
    }
})
