import express from 'express'

const app=express()


app.get("/note",(req,res)=>{
  res.send('This is my note.')
})

app.use((err,req,res,next)=>{
    console.error(err.stack),
    res.status(500).send('Something is broken!')
})


app.listen(8080,()=>{
    console.log('You are running on port 8080')
})