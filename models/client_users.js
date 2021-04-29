const mongoose = require('mongoose')

const Schema = mongoose.Schema

const clientUserSchema = new Schema({
  username: {type: String, required: true, unique: true, minLength: 5, maxLength: 20},
  password: {type: String, required: true},
  userTypeId: {type: Number, required: true , default: 2, hidden: true}
})

const Client = mongoose.model('Client', clientUserSchema)

module.exports = Client
