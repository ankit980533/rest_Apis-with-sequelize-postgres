const express = require('express')
const eqcController=require('../controller/eqcController')
const eqcAuth=require('../Middlewares/eqcAuth')
const router = express.Router()
const addeqc=eqcController

console.log("test:",addeqc)
router.post('/addeqc', eqcAuth.saveEqc, addeqc.addeqc )


module.exports = router