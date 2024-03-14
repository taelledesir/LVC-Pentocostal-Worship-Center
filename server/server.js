require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)


// const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
// const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY;

app.post('//LVC-Donation', async (req, res)=>{
    res.json({url: 'HI'})
    //console.log(url)
})

app.listen(3000)