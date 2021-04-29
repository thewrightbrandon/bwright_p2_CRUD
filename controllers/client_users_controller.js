const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/client_users.js')


users.get('/new', (req, res) => {
  res.render('users/client_users_new.ejs',
    {
      currentUser: req.session.currentUser,
      tabTitle: 'New User'
    }
  )
})


users.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (err, createdUser) => {
    console.log(`User was created: ${createdUser}`)
    res.redirect('/')
  })
})


module.exports = users
