const http=require('http')
const express=require('express')
const userRouter=require('./routes/users')

var app=express()

app.use('/users',userRouter)
const server=http.createServer(app,console.log('server run!!!'))
server.listen(3000)