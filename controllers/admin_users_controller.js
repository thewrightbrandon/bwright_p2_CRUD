const bcrypt = require('bcrypt')
const express = require('express')
const admins = express.Router()
// passes in admin model
const Admin = require('../models/admin_users.js')

// get request will respond by rendering admin_users_new.ejs
admins.get('/new_admin_secret_signup', (req, res) => {
  res.render('users/admin_users_new.ejs',
    {
      currentUser: req.session.currentUser,
      tabTitle: 'New Admin'
    }
  )
})

// post request will create admin at /admins/
admins.post('/', (req, res) => {
  // grabs the password input from req.body and hashes it a number of times
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  // using the admin template, takes req.body and creates new object
  Admin.create(req.body, (err, createdAdmin) => {
    console.log(`Admin was created: ${createdAdmin}`)
    // back to welcome page
    res.redirect('/')
  })
})


module.exports = admins
