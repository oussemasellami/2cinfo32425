const express=require('express')
const router=express.Router()

router.get('/show',(req,res)=>{
res.send('salut 2cinnfo3')
})
module.exports=router