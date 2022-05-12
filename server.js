const cors = require("cors");
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const paymentRoute = require("./src/routes/payment_intent.routes");

// Middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/v1", paymentRoute);

// listening the server
app.listen(PORT, () => {
  console.log(`Server is listening at port : ${PORT}`);
});
