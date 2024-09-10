const multer = require("multer")
const User = require("../models/user_Schema")
const nulter = require('multer')
const getUser =async(req,res)=>{
    data = await User.find()
    res.send(data)
}   


const postUser = async(req,res)=>{
    let data =await User.create(req.body)
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