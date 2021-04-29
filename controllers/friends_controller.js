const express = require('express')
const Friend = require('../models/friends.js')
const router = express.Router()

// const isAuthenticated = (req, res, next) => {
//   if(req.session.currentUser) {
//     return next()
//   } else {
//     res.redirect('/sessions/new')
//   }
// }

///////////////////////////////////
////// SEED ROUTE
///////////////////////////////////

router.get('/seed', (req, res) => {
  Friend.create(
    [
      {
        name: ,
        age: ,
        gender: ,
        breed: ,
        img: ,
        available: ,
        description:
      },
      {
        name: ,
        age: ,
        gender: ,
        breed: ,
        img: ,
        available: ,
        description:
      },
      {
        name: ,
        age: ,
        gender: ,
        breed: ,
        img: ,
        available: ,
        description:
      },
      {
        name: ,
        age: ,
        gender: ,
        breed: ,
        img: ,
        available: ,
        description:
      },
      {
        name: ,
        age: ,
        gender: ,
        breed: ,
        img: ,
        available: ,
        description:
      },
      {
        name: ,
        age: ,
        gender: ,
        breed: ,
        img: ,
        available: ,
        description:
      },
      {
        name: ,
        age: ,
        gender: ,
        breed: ,
        img: ,
        available: ,
        description:
      },
      {
        name: ,
        age: ,
        gender: ,
        breed: ,
        img: ,
        available: ,
        description:
      },
      {
        name: ,
        age: ,
        gender: ,
        breed: ,
        img: ,
        available: ,
        description:
      },
      {
        name: ,
        age: ,
        gender: ,
        breed: ,
        img: ,
        available: ,
        description:
      },
      {
        name: ,
        age: ,
        gender: ,
        breed: ,
        img: ,
        available: ,
        description:
      },
      {
        name: ,
        age: ,
        gender: ,
        breed: ,
        img: ,
        available: ,
        description:
      },
    ],
    (err, createdFriend) => {
      res.redirect('/friends')
    }
  )
})

///////////////////////////////////
////// INDEX ROUTE
///////////////////////////////////



///////////////////////////////////
////// DELETE ROUTE
///////////////////////////////////



///////////////////////////////////
////// NEW ROUTE
///////////////////////////////////



///////////////////////////////////
////// CREATE / POST ROUTE
///////////////////////////////////



///////////////////////////////////
////// UPDATE ROUTE
///////////////////////////////////



///////////////////////////////////
////// EDIT ROUTE
///////////////////////////////////



///////////////////////////////////
////// SHOW ROUTE
///////////////////////////////////



///////////////////////////////////
////// ADOPT ROUTE
///////////////////////////////////




module.exports = router
