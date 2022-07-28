const express=require('express');
const app=express();
var posts=require('./json.json')

	app.get('/',(req,res)=>{
        res.send('hello');
	})
	app.get('/posts',(req,res)=>{
		res.send(posts)
	})
	//listening to server
	app.listen(3000,()=>{
		console.log('Iam devika from Cse');
});