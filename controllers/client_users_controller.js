const bcrypt = require('bcrypt')
const express = require('express')
// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window )
const users = express.Router()
// passes in user model
const User = require('../models/client_users.js')

// get request will respond by rendering client_users_new.ejs
users.get('/new', (req, res) => {
  res.render('users/client_users_new.ejs',
    {
      currentUser: req.session.currentUser,
      tabTitle: 'New User'
    }
  )
})

// post request will create user at /users/
users.post('/', (req, res) => {
  // grabs the password input from req.body and hashes it a number of times
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  // using the user template, takes req.body and creates new object
  User.create(req.body, (err, createdUser) => {
   //  if(err) {
   //   $('.userConfirmation').text('Error')
   // } else {
   //   $('.userConfirmation').text('Success!')
   // }
   res.redirect('/')
  })
})

module.exports = users
