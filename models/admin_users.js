const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminSchema = new Schema({
  username: {type: String, required: true, unique: true, minLength: 5, maxLength: 20},
  password: {type: String, required: true},
  userTypeId: {type: Number, required: true, default: 1}
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin
