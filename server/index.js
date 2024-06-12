const express = require('express')
const dbconnect = require('./src/db/connection')
const { Schema, default: mongoose } = require('mongoose')
const app = express()

require('dotenv').config()

app.use(express.json()) //body parcel
dbconnect()

const userSchema = new Schema(
  {
    phoneNumber: String,
    fullName: String,
    email: String,
    password: String,
    gender: {
      type: String,
      enum: ['male', 'female', 'others'],
      default: 'male'
    },
    role: {
      type: String,
      enum: ['admin', 'user',],
      default: 'admin'
    },
    
  }
);
const User = mongoose.model('User', userSchema);
const port = process.env.PORT

app.get('/users',  (req, res) => {
  res.send(['Ram', 'Shyam', 'Hari'])

});
app.get('/find', async (req, res) => {
  const data = await User.find()
  res.json(data)

});
//to encrypt number and password
app.post('/register', async (req, res) => {
  
  const userExist = await User.exists({phoneNumber: req.body.phoneNumber})
  console.log(userExist)
  if(userExist){
    return res.json({mes: "Phone Number is already taken"})
  }
  await User.create(req.body)
  return res.json({mes: "User register"})
});


app.post('/reg', (req, res) => {
  res.send('ok')
  console.log(req.body.phoneNumber)
  User.create(req.body)
  



});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})