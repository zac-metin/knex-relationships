var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('index', { users: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profiles', function (req, res) {
  db.getAllProfiles(req.app.get('connection'))
    .then(function (users) {
      res.render('profiles', { profiles: users })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/profiles/:id', function (req,res) {
  var id = req.params.id
  db.getProfiles(id,req.app.get('connection'))
  .then(function (user) {
    res.render('profiles', {profiles:user })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})
router.get('/new', function (req,res) {
db.getUsers(req.app.get('connection'))
  .then(function (users) {
    res.render('form', { users: users })
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})
//
router.post('/new', (req,res) => {
  var newData = req.body
  console.log(newData)
  db.addProfile(newData,req.app.get('connection'))
  .then(function (users) {
    var id = newData.user_id
    res.redirect('/profiles/:id')
  })
  .catch(function (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  })
})




module.exports = router
