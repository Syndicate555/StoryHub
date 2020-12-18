// Code for authenticating and loggin in with google

const express = require('express')
const router = express.Router()
const router = express.Router()


// GET request Authenticate with google
router.get('/google', passport.authenticate('google', { scope:['profile']}))


// Google auth callback 
// GET /
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
 res.redirect('/dashboard')
})

module.exports = router