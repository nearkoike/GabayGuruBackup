const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
var jwt = require('jsonwebtoken');
require("dotenv").config();

// middleware
app.use(cors());
app.use(express.json());

// mongodb config using mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@gabayguru-cluster.nokvbhl.mongodb.net/gabayguru-db?retryWrites=true&w=majority&appName=gabayguru-cluster`
  )
  .then(console.log("MongoDB connected succesfully"))
  .catch((error) => console.log("Error connecting to MongoDB", error));

// jwt authentication
app.post('/jwt', async (req, res) => {
  const user = req.body;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
    expiresIn: "1hr",
  });
  res.send({ token });
})

// import routes
const userRoutes = require("./api/routes/userRoutes")
const ewalletRoutes = require("./api/routes/ewalletRoutes")

app.use("/users", userRoutes);
app.use("/ewallets", ewalletRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
