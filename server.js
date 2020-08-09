const express = require('express')
const app     = express()
const port    = 3000
const path    = require('path')
const data    = require('./data/items.json')
const bodyParser = require('body-parser')

//setup view engine 
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'hbs')

// setup static derictory
app.use(express.static('public'))

//setup body parser
app.use(bodyParser.urlencoded({ 
    extended:false 
}))


// middleware example
    const middleware1 = (req, res, next) => {
        console.log('Middleware berjalan')
        next()
    }

    const middleware2 = (req, res, next) => {
        console.log('Middleware 2 berjalan')
        next()
    }

    app.use(middleware1)
    app.use(middleware2)
// end middleware


//routing

    //rendering template view index
    app.get('/',(req, res) =>{
        res.render('index',{
            items : data
        })
    })
        
    //detail view
    app.get('/detail/:id',(req, res) =>{
        const item = data.find(data =>{
            return data.id === parseInt(req.params.id)
        })
        res.render('detail',{
            item : item
        })
    })

    // route get view form 
    app.get('/form',(req, res) =>{
        res.render('form')
    })

    // route post req example
    app.post('/form',(req, res) =>{
        res.render('form',{
            name : req.body.name
        })
    })
    
    // make res to variable
    const message = (req,res) => {
        res.send(`namanya saya  : ${req.params.nama}`)
    }

    //route get with param example
    app.get('/with-params/:nama',message)

    
    //redirect route 
    app.get('/redirect',(req, res) => {
        res.redirect('https://github.com/trianggautama')
    })

    //redirect local route 
    app.get('/local-redirect',(req, res) => {
        res.redirect('/')
    })

    app.get('/sendFile',(req,res) => {
        res.sendFile('/Users/triangga/pictures/Screen Shot 2020-03-04 at 18.50.26.png')
    })


    //rendering temaplate view with data
    app.get('/with-data/:data',(req,res) =>{
        res.render('with-data',{
            data    : req.params.data
        })
    })
//end routing

app.listen(port,()=>{
    console.log(`server berjalan pada port : ${port}`)
})