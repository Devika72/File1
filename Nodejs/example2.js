const express=require('express');
const app=express();
const posts_route=require('./routes/posts.routes.js');
//middleware routes
	app.use('/posts',posts_route);
	//get request for path '/'
	app.get('/',(req,res)=>{
		res.send("hello world");
	})
	//listening to server
	app.listen(3001,()=>{
		console.log('Iam devika from Cse');
});