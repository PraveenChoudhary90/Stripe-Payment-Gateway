const  express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require('path');
const Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const ProRoutes = require("./Routes/ProRoutes");
const Payment = require("./Routes/pyment");

app.use(cors());

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log("DB IS CONNECTED");
})


app.use("/shose", ProRoutes)
app.use("/shoes", Payment);

const port =process.env.PORT || 8000
app.listen(port, ()=>{
    console.log(`Server is running on  ${port} port`);
})