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


app.get('/',(req,res)=>{
    res.send("Hallo world")
})

app.listen(port,()=>{
    console.log(`server berjalan pada port : ${port}`)
})