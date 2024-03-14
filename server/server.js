require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)


// const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
// const STRIPE_PUBLIC_KEY = process.env.STRIPE_PUBLIC_KEY;

app.post('/create-checkout-session', async (req, res)=>{
try{
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment'
    })
    res.json({url: 'HI'})
}catch (e){
    res.status(500).json({error: e.message})
}

    //console.log(url)

})

app.listen(3000)