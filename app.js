const express = requuire('express')
const app = express()

app.get('/',(req,res)=>{
    res.json({
        mesg:'hello backend'
    })
})

app.listen(3000)