const multer = require("multer")
const User = require("../models/user_Schema")


const getUser =async(req,res)=>{
    data = await User.find()
    res.send(data)
}   


const postUser = async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    
    let {username, password,email} = req.body
    let profileImg 
    if(req.file){
        profileImg = req.file.path
    }

    let userData ={
        username,
        password,
        email,
        profileImg
    }
    let data =await User.create(userData)
    res.send(data)
}


const updateUser=async(req,res)=>{
    let {id}=req.params
    let data = await User.findByIdAndUpdate(id,req.body,{new:true})
    res.send(data)
}

const deleteUser = async(req,res)=>{
    let {id}=req.params
    let data = await User.findByIdAndDelete(id)
    res.send(data)
}

 

const storage =multer.diskStorage({
    destination:"uploade",
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname)
    }
})

const upload = multer({
    storage:storage
})  

module.exports = {getUser,postUser,updateUser,deleteUser,upload}