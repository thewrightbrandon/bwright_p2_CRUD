const bcrypt = require('bcrypt')
const express = require('express')
// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window )
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
  User.create(req.body, res, (err, createdUser) => {
   //  if(err) {
   //   $('.userConfirmation').text('Error')
   // } else {
   //   $('.userConfirmation').text('Success!')
   // }
   res.redirect('/')
  })
})

module.exports = users
