const functions = require("firebase-functions");
const express = require ("express");
const cors =require("cors");
const stripe = require("stripe")("sk_test_51PemKwLbXXNN8PEt748ItAyeOHgqELl6qPTUfF1Pw" + 
    "j1JBnysFQcbKFZcH8yvSAhONOTQI6GRc1KsIoGDwakIq27I00fAwh56Bv"
);

const app = express();
 app.use(cors({origin: true}));
 app.use(express.json());
 app.get("/",(req, res) => res.status(200).send("Backend Running"));
 app.post("/payments/create", async (req, res) =>{
    const total = req.query.total;
    console.log("Payment request received for this amount >>>", total);

    const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
    })
    res.status(201).send({clientSecret: paymentIntent.clientSecret});
  })
  exports.api = functions.https.onRequest(app);

