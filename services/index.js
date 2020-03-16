const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    console.log('GET /')
    console.log('headers:')
    console.log(req.headers)
    console.log('originalURL:')
    console.log(req.originalUrl)
    res.send(req.headers)
})

router.post('/', (req,res)=>{
    console.log('POST /')
    console.log('headers:')
    console.log(req.headers)
    console.log('originalURL:')
    console.log(req.originalUrl)
    console.log('body:')
    console.log(req.body)
    res.send(req.body)
})

module.exports = router