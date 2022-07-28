const express=require('express');
const app=express();
var posts=require('./json.json')
const bodyParser=require("body-parser")

	//listening to server
	app.listen(3004,()=>{
		console.log('Iam from RGUKT');
		app.use(bodyParser.json())

	app.post("/",(req,res)=>{
		console.log(req.body)
    })
	app.get('/posts',(req,res)=>{
		res.send(posts)
	})
});