const bcrypt = require('bcrypt')
const express = require('express')
const admins = express.Router()
const Admin = require('../models/admin_users.js')


admins.get('/new_admin_secret_signup', (req, res) => {
  res.render('users/admin_users_new.ejs',
    {
      currentUser: req.session.currentUser,
      tabTitle: 'New Admin'
    }
  )
})


admins.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  Admin.create(req.body, (err, createdAdmin) => {
    console.log(`Admin was created: ${createdAdmin}`)
    res.redirect('/')
  })
})


module.exports = admins
