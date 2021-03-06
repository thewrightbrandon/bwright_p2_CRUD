const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {type: String, required: true, unique: true, minLength: 5, maxLength: 20},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true, minLength: 8},
  userTypeId: {type: Number, required: true , default: 2}
})

const User = mongoose.model('User', userSchema)

module.exports = User
