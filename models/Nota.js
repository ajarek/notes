const mongoose = require('mongoose')

const NotaSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})
module.exports = new mongoose.model('notes',NotaSchema)