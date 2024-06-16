const mongoose = require('mongoose')
const { Schema } = mongoose;

const transactionsSchema = new Schema({
  sender: Number,
  receiver: Number,
  amount: {type:Number, required:true},
},
{
  timestamps: true
});
const Transactions = mongoose.model('Transactions', transactionsSchema);
module.exports= Transactions