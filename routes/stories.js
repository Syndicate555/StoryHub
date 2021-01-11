const express = require('express')
const router = express.Router()
const {ensureAuth} = require('../middlewares/auth') // destructuring
const Story  = require('../models/Story')

// @desc  Show add page
// @route GET /stories/add
router.get('/add', ensureAuth, (req, res) => { 
 res.render('stories/add')
})

// @desc  Process add form
// @route POST /stories/add
router.post('/', ensureAuth, async (req, res) => { 
    try {
    req.body.user = req.user.id
    await Story.create(req.body)
    res.redirect('/dashboard')
} catch (error) {
    console.error(error)
    res.render('errors/500')
}
   })
// @desc  Show all stories
// @route GET /stories
router.get('/', ensureAuth, async (req, res) => { 
    try {
        const stories = await Story.find({ status: 'public'})
            .populate('user')
            .sort({createdAt: 'desc'})
            .lean()
        res.render('stories/index', {
            stories,
        })

        
    } catch (error) {
        console.error(error)
        res.render('errors/500')
        
    }
   })
// @desc  Show edit page
// @route GET /stories/edit/:id
router.get('/edit/:id', ensureAuth, (req, res) => { 
    res.render('stories/edit')
   })
   
   



module.exports = router