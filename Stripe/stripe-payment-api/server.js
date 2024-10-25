require("dotenv").config(); // Ensure this line is at the top
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51QA0TdFF3QB7HISz0odtXXH9sD8QWJWjSVS7yp8vT4La8NxVHv2h1iD5KMDcDwToIkg0EPhvmHxbyXdZydgynYei00RuR9boHw"
);

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Route to create payment intent
app.post("/create-payment-intent", async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    res.status(500).send({
      error: error.message,
    });
  }
});

// Start server on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
