const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.send(req.headers)
})

module.exports = router