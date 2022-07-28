const express=require('express');
const router=express.Router();
//importing posts data
var posts=require('../json.json');
router.get('/',(req,res)=>{
	res.send(posts);
});
router.get('/:id',(req,res)=>{
	res.send(posts[req.params.id]);
});
module.exports=router;