const  express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require('path');
const stripe = require('stripe')('sk_test_51RKGV8I6Nv23y5n8FULs22fqlEvCVt4gk6pAOlKalNovDxPRgSs91AMlSEDf7IJ3UMcf996zEui4gXtLZnjXzHSe009ZlwNm1S');

const ProRoutes = require("./Routes/ProRoutes");

app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log("DB IS CONNECTED");
})

app.post('/create-checkout-session', async (req, res) => {
  const { cartItems } = req.body;

  try {
    const line_items = cartItems.map((item) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.name || 'Unknown Item',
          images: [
            item.image?.startsWith('https://')
              ? item.image
              : 'https://via.placeholder.com/150'
          ],
        },
        unit_amount: Math.max(item.price * 100, 50), // minimum of 50
      },
      quantity: item.qnty || 1,
    }));

    console.log("LINE ITEMS SENT TO STRIPE:", JSON.stringify(line_items, null, 2)); // Add this for debugging

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/failed',
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error("Stripe Error:", error); // <-- Critical for debugging
    res.status(500).json({ error: error.message });
  }
});


app.use("/shose", ProRoutes)

const port =process.env.PORT || 8000
app.listen(port, ()=>{
    console.log(`Server is running on  ${port} port`);
})