const express = require("express")
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors  = require("cors")

// import express from "express"
// import mongoose from "mongoose"
// import "dotenv/config"
// import cors from "cors"
// import bodyParser from "body-parser"




const port = 3000
const app = express()
app.use(cors())

const { Schema } = mongoose;

const productSchema = new Schema({
  image: String, // String is shorthand for {type: String}
  title: String,
  description:String,
  price: Number
  
});

const productModel = mongoose.model('Product', productSchema);
app.get('/', (req, res) => {
    const data=productModel.find(id)
    res.send('data')
})

app.get('/products', async(req, res) => {
    const data= await productModel.find()
    res.send(data)
  })

  
  app.post('/products', async(req, res) => {
    const data= await productModel.findById(id)
    res.send(data)
  })

  
  app.put('/products/:id', async (req, res) => {
    const data= await productModel.findByIdAndUpdate(id,req.body)
    res.send('data')
  })

  
  app.delete('/product/:id', async (req, res) => {
    const data= await productModel.findByIdAndDelete(id,req.body)
    res.send('data')
  })


mongoose.connect('mongodb+srv://zubeydaalizada:Zubeyda21.>@cluster0.dmo4w.mongodb.net/')
.then(() => console.log("connect"))
.catch((err)=> console.log("error",err))

app.listen(port, () => {
  console.log(`Example app listening on 3000`)
})
      