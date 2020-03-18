const express = require('express')
const router = express.Router()

//GET /profile
router.get('/', (req,res)=>{
    console.log('GET /profile')
    console.log('headers:')
    console.log(req.headers)
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    res.send('GET profile service')
})

//POST /profile
router.post('/', (req,res)=>{
    console.log('POST /profile')
    console.log('headers:')
    console.log(req.headers)
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('body:')
    console.log(req.body)
    res.send(req.body)
})

//DELETE /profile
router.delete('/', (req,res)=>{
    //implement mock delete route
})

//PUT /profile
router.put('/', (req,res)=>{
    //implement mock put route
})

module.exports = router