const express=require('express');

const app=express();

app.post('/', (req, res)=>{
    res.download('./assets/nature.jpg');
})

app.listen(4040, ()=>{
    console.log("Server is running at port 4040");
})