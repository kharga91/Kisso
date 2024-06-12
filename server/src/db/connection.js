const mongoose = require('mongoose');

const dbconnect = async()=>{
    try{
 const connection=await   mongoose.connect('mongodb://127.0.0.1:27017/kisso');
 if(connection) console.log(" connected to mangodb")
 }catch(err){
console.log(err)
process.exit()
}
}



module.exports =dbconnect