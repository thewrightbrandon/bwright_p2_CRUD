const express = require('express')
const Friend = require('../models/friends.js')
const router = express.Router()

const isAuthenticated = (req, res, next) => {
  if(req.session.currentUser) {
    return next()
  } else {
    res.redirect('/sessions/new')
  }
}

///////////////////////////////////
////// SEED ROUTE
///////////////////////////////////

// router.get('/seed', (req, res) => {
//   Friend.create(
//     [
//       {
//         name: 'Tim',
//         age: 8,
//         type: 'Dog',
//         gender: 'Male',
//         breed: 'American Pit Bull',
//         img: 'https://i.imgur.com/kGBA7ql.jpg',
//         available: true,
//         description: 'Tim is easily introduced to new people by bringing him an exciting new toy to play fetch with. He has a vision impairment, so he does not like to be startled. He loves to rough house and play with other dogs, but he doesn\'t do well with cats. He was born in 2013. Tim is looking for an active person to love, and he promises to be loyal for life.'
//       },
//       {
//         name: 'Pepper',
//         age: 5,
//         type: 'Dog',
//         gender: 'Female',
//         breed: 'Labrador Retriever / Collie',
//         img: 'https://i.imgur.com/IrWWOwA.jpg',
//         available: true,
//         description: 'This little cutie is filled with personality and can\'t wait to meet you! Pepper is an energetic and smart girl who loves to be with her people. She can be a little cautious at first, but once she\'s decided that you\'re in her circle, she\'ll love you forever. Pepper also loves her toys and after her walks, she likes to curl up on her bed or in a patch of sun with her stuffed teddy bear. She can be a little nervous with new situations, but she loves learning new things. This sweet girl would love for you to be her person, so come and meet her today!'
//       },
//       {
//         name: 'Tuna',
//         age: 4,
//         type: 'Cat',
//         gender: 'Female',
//         breed: 'Domestic Medium Hair',
//         img: 'https://i.imgur.com/B1d7Ad0.jpg',
//         available: true,
//         description: 'Tuna was born in June 2017. She has epilepsy, for which she takes medication twice a day. This sweet girl is working on trusting people, however, she doesn\'t mind sleeping near you if you are working. Tuna is looking for someone who can help her continue with her medical and help her come out of her shell.'
//       },
//       {
//         name: 'Phantom',
//         age: 6,
//         type: 'Dog',
//         gender: 'Male',
//         breed: 'Siberian Husky',
//         img: 'https://i.imgur.com/xIEUV6z.jpg',
//         available: true,
//         description: 'Phantom is a fun-loving, athletic guy. He\'s smart and a fast learner. Phantom loves to show off his toys and can be really silly with people he trusts. Always up for a hike or an adventure, Phantom enjoys being active. He has a cute way of "talking" and a beautiful howl. Do you think Phantom could be your new blue-eyed best buddy?'
//       },
//       {
//         name: 'Daisy',
//         age: '8',
//         type: 'Cat',
//         gender: 'Female',
//         breed: 'Domestic Short Hair',
//         img: 'https://i.imgur.com/2c70q7f.jpg',
//         available: true,
//         description: 'Daisy is cautious around people, but she\'s getting more comfortable every day. She\'ll even let you get close if you have treats for her. She does great with other cats as long as they\'re not aggressive. Daisy arrived here with a bad eye that was not functioning. It was removed, and she does just fine. Daisy will definitely take some time to adjust to the people in a new home, but if there are other easygoing and friendly cats she\'ll settle in with them quickly.'
//       },
//       {
//         name: 'Wilson',
//         age: 4,
//         type: 'Cat',
//         gender: 'Male',
//         breed: 'Domestic Short Hair',
//         img: 'https://i.imgur.com/nrwFsTy.jpg',
//         available: true,
//         description: 'Wilson is a handsome tabby who came to us in 2017. He loves to play with wand toys, eat lots of Temptations and to be with his feline companions. He is a bit reserved and will need a quiet home. It may take some patience to warm up to his family but once he earns your trust he will be rolling over for belly rubs.'
//       },
//       {
//         name: 'Cuddles',
//         age: 14,
//         type: 'Cat',
//         gender: 'Female',
//         breed: 'Domestic Short Hair',
//         img: 'https://i.imgur.com/wCcI1Sc.jpg',
//         available: true,
//         description: 'Cuddles is a senior gal who is full of life and wants nothing more than to be in your lap. She is curious about all her surroundings, loves to go on stroller and harness walks. With those big green eyes she will put you in a trance when you look into them so she usually gets what she wants. She receives insulin twice a day for diabetes but don\'t let that scare you, we can show you how to administer it! Will you be the one lucky enough to give this girl a home?'
//       },
//       {
//         name: 'Strawberry',
//         age: 8,
//         type: 'Dog',
//         gender: 'Female',
//         breed: 'Staffordshire Terrier',
//         img: 'https://i.imgur.com/Nk8KpcE.jpg',
//         available: true,
//         description: 'Strawberry is as sweet as her name! She is friendly and affectionate with everyone, although her exuberance for life may make her a better fit in a home without small children or anyone unsteady on their feet. Strawberry would make a great exercise buddy. Her idea of a perfect day would be to start off with a hike or maybe an agility lesson or splash in the kiddie pool, then some time to romp around in a backyard and of course a cuddle session to finish her day.'
//       },
//       {
//         name: 'Peter',
//         age: 6,
//         type: 'Dog',
//         gender: 'Male',
//         breed: 'Hound / Mastiff',
//         img: 'https://i.imgur.com/H8dxwOJ.jpg',
//         available: true,
//         description: 'Peter is a fun-loving dog searching for a person or a family who\'ll spend some quality time with him. He loves to learn and really enjoys doing activities where he can use his mind. Peter walks nicely on a leash and loves walking with people. He likes to remind everyone of his hound heritage by baying a big hello as people walk by. He also enjoys car rides and playing with toys. Peter is an active dog, but he doesn\'t have to be doing something constantly.'
//       },
//       {
//         name: 'Mr. Handsome',
//         age: 11,
//         type: 'Cat',
//         gender: 'Male',
//         breed: 'Domestic Short Hair',
//         img: 'https://i.imgur.com/OBvicpm.jpg',
//         available: true,
//         description: 'The name is fitting for this purrfect senior gentleman. Although he may seem shy, with a little patience and a few treats he will be in your lap before you know it. He would prefer a quiet home where he can take the time to adjust to his surroundings. Mr. Handsome would love a home of his own to live out his senior years and he would love nothing better than to live it with you.'
//       },
//       {
//         name: 'Raisin',
//         age: 2,
//         type: 'Cat',
//         gender: 'Female',
//         breed: 'Domestic Short Hair',
//         img: 'https://i.imgur.com/IFbblvv.jpg',
//         available: true,
//         description: 'Raisin is a curious young kitten that enjoys the company of her cat friends. Still a little shy around humans but lets us get closer and closer every day. Takes a little time to adapt to new situations but once she feels comfortable her confident and fun loving nature begins to shine.'
//       },
//       {
//         name: 'Hannah',
//         age: 8,
//         type: 'Dog',
//         gender: 'Female',
//         breed: 'Labrador Retriever',
//         img: 'https://i.imgur.com/zMsT5d1.jpg',
//         available: true,
//         description: 'Hannah is a sweet silly girl who loves the company of her dog and human friends. She gets excited every time she meets a new person and will happily accompany you for walks or be happy to just lounge about enjoying the finer things in life - like snacks and naps.'
//       },
//     ],
//     (err, createdFriend) => {
//       res.redirect('/friends')
//     }
//   )
// })

///////////////////////////////////
////// INDEX ROUTE
///////////////////////////////////

router.get('/', (req, res) => {
  Friend.find({}, (err, allFriends) => {
    res.render('friends/index.ejs',
      {
        friends: allFriends,
        tabTitle: 'Friends',
        currentUser: req.session.currentUser,
      }
    )
  })
})

///////////////////////////////////
////// DELETE ROUTE
///////////////////////////////////

router.delete('/:id', (req, res) => {
  Friend.findByIdAndRemove(req.params.id, (err, foundFriend) => {
    res.redirect('/friends')
  })
})

///////////////////////////////////
////// NEW ROUTE
///////////////////////////////////

router.get('/new', (req, res) => {
  res.render('friends/new.ejs',
    {
      tabTitle: 'New',
      currentUser: req.session.currentUser,
    }
  )
})

///////////////////////////////////
////// CREATE / POST ROUTE
///////////////////////////////////

router.post('/', (req, res) => {
  if(req.body.available === 'on') {
      req.body.available = true;
    } else {
      req.body.available = false;
    }
  Friend.create(req.body, (err, createdFriend) => {
    console.log(createdFriend)
    res.redirect('/friends')
  })
})

///////////////////////////////////
////// EDIT ROUTE
///////////////////////////////////

router.get('/:id/edit', (req, res) => {
  Friend.findById(req.params.id, (err, foundFriend) => {
    res.render('friends/edit.ejs',
      {
        friend: foundFriend,
        tabTitle: 'Edit',
        currentUser: req.session.currentUser,
      }
    )
  })
})

///////////////////////////////////
////// ADOPT ROUTE
///////////////////////////////////

router.put('/:id/adopt', (req, res) => {
  Friend.findById(req.params.id, (err, foundFriend) => {
    foundFriend.save(foundFriend.available = false)
    res.redirect(`/friends/${foundFriend.id}`)
  })
})

///////////////////////////////////
////// UPDATE ROUTE
///////////////////////////////////

router.put('/:id', (req, res) => {
  if(req.body.available === 'on') {
      req.body.available = true;
    } else {
      req.body.available = false;
    }
  Friend.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, foundFriend) => {
    res.redirect(`/friends/${foundFriend.id}`)
  })
})

///////////////////////////////////
////// SHOW ROUTE
///////////////////////////////////

router.get('/:id', (req, res) => {
  Friend.findById(req.params.id, (err, foundFriend) => {
    res.render('friends/show.ejs',
      {
        friend: foundFriend,
        tabTitle: foundFriend.name,
        currentUser: req.session.currentUser,
      }
    )
  })
})

module.exports = router
