require('dotenv').config()

const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')


// Login
router.post('/login',  (req,res)=>{
    //Authenticate User

    const username = req.body.username
    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)

    res.json({ accessToken: accessToken })
})

// register - not implemented
router.post('/register',authenticateToken, (req,res)=>{
    console.log('*** New Request ***')
    console.log('method: ' + req.method)
    console.log('originalURL: ' + req.originalUrl)
    console.log('headers:')
    console.log(req.headers)
    console.log('body:')
    console.log(req.body)

    res.send(req.user)
})


function authenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

module.exports = router