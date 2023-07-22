const cors = require("cors");
require('dotenv/config');
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const {uuid} = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!");
});

app.post("/checkout", async (req, res) => {
  
  let error;
  let status;
  try {
    console.log("Request:", req.body);
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: "35 LIC COLONY",
            line2: "chitragupta nagar, kanakrbagh",
            city: "patna",
            country: "India",
            postal_code: "800020"
          }
        }
      },
      {
        idempotency_key
      }
    );
    status = "success";
  } catch (error) {
    console.error("Error:", error);
    status = "failure";
  }

  res.json({ error, status });
});

app.listen(5500);
