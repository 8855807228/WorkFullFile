const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51QA0TdFF3QB7HISz0odtXXH9sD8QWJWjSVS7yp8vT4La8NxVHv2h1iD5KMDcDwToIkg0EPhvmHxbyXdZydgynYei00RuR9boHw"
);

app.use(express.json());
app.use(cors());

app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  console.log(products);
  const lineItem = products.map((item) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: item.name,
      },
      unit_amount: item.new_price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItem,
    mode: "payment",
    success_url: "http://localhost:5000/success",
    cancel_url: "http://localhost:5000/cancel",
  });
  res.json({ id: session.id });
});

app.listen(7000, () => {
  console.log("start server");
});
