//importing mongoose package
const mongoose=require("mongoose")
const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    year:{
        type:Number,
        required:true
    },
    published:{
        type:String,
        required:true
    }
},
 {collection:"posts"}
)
module.exports=mongoose.model("Posts",postSchema)