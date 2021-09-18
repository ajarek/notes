const router = require('express').Router()
const Nota = require('../models/Nota')

router.get('/',async(req,res)=>{
    const allNotes=await Nota.find({})
    res.render('index',{notes:allNotes})
    
})



module.exports=router