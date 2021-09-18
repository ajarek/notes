const router = require('express').Router()

const Nota = require('../models/Nota')

router.get('/notka/:id', async(req,res)=>{
const {id}=req.params
const getNota=await Nota.findOne({_id: id})

res.render('particularNota',{notes:getNota})

})
.get('/delete/:id',(req,res)=>{
    const{id}=req.params
    Nota.deleteOne({_id:id})
    .then(()=>{
        console.log('Deleted note successfully!')
        res.redirect("/")
    })
     .catch((err)=>console.log(err))
    
})
.get('/edit/:id',async(req,res)=>{
    const{id}=req.params
    const getData =await Nota.findOne({_id:id}) 
    res.render('editNota',{notes:getData})
})
.post('/edit/:id',(req,res)=>{
    const{id}=req.params
    const {title,content}=req.body
    Nota.updateOne({_id:id},{title,content})
    .then(()=>{
        console.log('successfuly! updated the note!')
        res.redirect('/')
    })
    .catch(err=>console.log(err))
})

module.exports=router
