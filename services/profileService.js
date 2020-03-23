const express = require('express')
const router = express.Router()
const GET_profiles = require('../mock_jsons/GetProfilesResponse')
const GET_prodilesID = require('../mock_jsons/GetProfilesIDResponse')

// GET /profiles
router.get('/', (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)

    res.send(GET_profiles)
})

// GET /profiles/{id}
router.get('/:id', (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)

    res.send(GET_prodilesID)
})

// POST /profiles
router.post('/', (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)
    console.log('body:')
    console.log(req.body)

    res.send(req.body)
})

// PUT /profiles/{id}
router.put('/:id', (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)
    console.log('body:')
    console.log(req.body)

    res.send(req.body)
})

// DELETE /profiles
router.delete('/:id', (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)
    console.log('body:')
    console.log(req.body)

    res.send(req.body)
})

module.exports = router