const mongoose = require('mongoose')

const Schema = mongoose.Schema

const friendsSchema = new Schema({
  name: {type: String, required: true},
  age: {type: Number, required: true},
  type: {type: String, required: true},
  gender: String,
  breed: String,
  img: String,
  available: {type: Boolean, default: true},
  description: String,
})

const Friend = mongoose.model('Friend', friendsSchema)

module.exports = Friend
