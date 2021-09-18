const router = require('express').Router()
const Nota = require('../models/Nota')
router.get('/compose',(req,res)=>{
    
    res.render('nowaNota')
})
.post('/compose',(req,res)=>{
    const{title,content}=req.body
    if(!title || !content)
     return res.send('Plase enter all the required credetnials!')
     const newNota =new Nota({title, content})
     newNota.save()
     .then(()=>{
         console.log('Nota Saved Successfully!')
         res.redirect('/')
     })
     .catch(err=>console.log('err'))
})

module.exports =router