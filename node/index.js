require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const dbConnetc = require('./config/db')
const userRouter = require('./routes/user_route');

const PORT = process.env.PORT || 8090;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.get("/",(req,res)=>{
  res.send("Welcome to the node")
})


app.use('/user',userRouter)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  dbConnetc()
})
