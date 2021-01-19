const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.render('pages/prove02', {
        title: 'Prove 02',
        path: '/prove02',
        book: '',
        summary: ''
    })
})

.post('/', (req, res, next) => {
    const title = req.body.title
    const summary = req.body.summary

    res.render('pages/prove02', {
        title: 'Prove 02',
        path: '/prove02',
        book: title,
        summary
    })
})

module.exports = router