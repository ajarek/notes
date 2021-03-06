const express=require('express')
const mongoose=require('mongoose')

const {port,database} = require('./config')
const app = express()
//databasa
mongoose.connect(database,()=>{
    console.log('conect database');
})

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
//routes
app.use(require('./routes/index'))
app.use(require('./routes/compose'))
app.use(require('./routes/notka'))

app.listen(port, () => {
    console.log('Server started listening:'+ port);
})