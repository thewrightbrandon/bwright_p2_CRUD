const bcrypt = require('bcrypt')
const express = require('express')
const sessions = express.Router()
const Admin = require('../models/admin_users.js')


sessions.get('/new_admin', (req, res) => {
  res.render('sessions/sessions_new.ejs',
    {
      currentUser: req.session.currentUser,
      tabTitle: 'LOGIN'
    }
  )
})


sessions.post('/', (req, res) => {


  // username is found and password matches - successful log in

  // username is not found - who cares about password if you don't have a username that is found? - unsuccessful login

  // username found but password doesn't match - unsuccessful login

  // some weird thing happened?


  // find the user that matches the username input from the form
  Admin.findOne({username: req.body.username}, (err, foundAdmin) => {
    // if there was an error do this
    if(err) {
      console.log(err)
      // if user was not found do this
    } else if (!foundAdmin) {
      res.send('Username does not exist. <a href="sessions/new_admin">Try Again?</a>')
      // user was found do this
    } else {
      // comparing original password to generated hash password
      if(bcrypt.compareSync(req.body.password, foundAdmin.password)) {
        // if everything matches do this, user session has now started
        req.session.currentUser = foundAdmin
        res.redirect("/friends")
      } else {
        // if password does not match do this
        res.send('Password did not match. <a href="sessions/new">Try Again?</a>')
      }
    }
  })
})


sessions.delete("/", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/")
  })
})


module.exports = sessions
