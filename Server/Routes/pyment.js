

const express = require('express');
const router = express.Router();
const { Stripe } = require('stripe');
const dotenv = require('dotenv');
const Order = require("../Model/ProModel")
dotenv.config();

const stripe = new Stripe(data, {
  apiVersion: '2020-08-27',
});

router.post('/create-checkout-session', async (req, res) => {
  const { products } = req.body;

  const items1 = cart.map(item => ({
    id: item.id,
    name: item.name,
    image: item.image,
    brand:item.brand,
    price: item.price,
    quantity: item.quantity,
  }));

  const items = products.map(item => ({
    price_data: {
      currency: 'usd',
      unit_amount: item.price * 100,
      product_data: {
        name: item.name,
        images: [item.image],
      },
    },
    quantity: item.quantity,
    
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items,
      mode: 'payment',
      success_url: 'http://localhost:5173/success', 
      cancel_url: 'http://localhost:5173/failed',   
    });
    
    console.log(session.url);

    const order = new Order({
      items: items1,
      numberOfItems: products.length,
      totalPrice: amount,
      paymentType: 'Online Using Stripe',
      paymentStatus: 'Successful', 
      transactionId: session.id
    });


    await order.save();
    // Return the session URL to the frontend
    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;