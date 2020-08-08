const express = require("express")
const app     = express()
const port    = 3000

//middleware
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
//end middleware


//routing

    //basic get routing
    app.get('/',(req,res)=>{
        res.send("Hallo world")
    })

    //with param example
    const message = (req,res) => {
        res.send(`namanya saya  : ${req.params.nama}`)
    }

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


//end routing

app.listen(port,()=>{
    console.log(`server berjalan pada port : ${port}`)
})