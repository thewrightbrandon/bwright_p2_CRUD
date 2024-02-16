///////////////////////////////////
////// DEPENDENCIES
///////////////////////////////////

const express = require('express')
const methodOverride  = require('method-override')
const mongoose = require ('mongoose')
const session = require('express-session')
const MONGODB_URI = require('./env.js')

///////////////////////////////////
////// CONFIG
///////////////////////////////////

require('dotenv').config()

const app = express ()
const db = mongoose.connection

///////////////////////////////////
////// PORT
///////////////////////////////////

const PORT = process.env.PORT || 3003

///////////////////////////////////
////// MIDDLEWARE
///////////////////////////////////

app.use(express.static('public'))
app.use(express.static('public/js/app.js'))

// populates req.body with parsed info from forms
app.use(express.urlencoded({extended: true}))

app.use(express.json());// returns middleware that only parses JSON - may or may not need it

// allow POST, PUT and DELETE from a form
app.use(methodOverride('_method'))

app.use(session({
    secret: "FeedMeSeymour",
    resave: false,
    saveUninitialized: false
  })
)

///////////////////////////////////
////// DATABASE
///////////////////////////////////

mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true})
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI))
db.on('disconnected', () => console.log('mongo disconnected'))

///////////////////////////////////
////// CONTROLLERS
///////////////////////////////////

const friendsController = require('./controllers/friends_controller.js')
app.use('/friends', friendsController)

const adminsController = require('./controllers/admin_users_controller.js')
app.use('/admins', adminsController)

const usersController = require('./controllers/client_users_controller.js')
app.use('/users', usersController)

const adminSessionsController = require('./controllers/admin_sessions_controller.js')
app.use('/sessions', adminSessionsController)

const userSessionsController = require('./controllers/client_sessions_controller.js')
app.use('/sessions', userSessionsController)

///////////////////////////////////
////// WELCOME ROUTE
///////////////////////////////////

app.get('/', (req, res) => {
  res.render('friends/welcome.ejs',
    {
      tabTitle: 'Welcome!',
      createdUser: req.body
    }
  )
})

///////////////////////////////////
////// ABOUT ROUTE
///////////////////////////////////

app.get('/about', (req, res) => {
  res.render('friends/about.ejs',
    {
      tabTitle: 'About',
      currentUser: req.session.currentUser,
    }
  )
})

///////////////////////////////////
////// LISTENER
///////////////////////////////////

app.listen(PORT, () => console.log('Listening on port:', PORT))
