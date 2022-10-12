const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/", productRoute);
app.use("/create", productRoute);

/************************************************/
mongoose
  .connect(process.env.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server is running on the port: ${process.env.PORT}`);
    });
  });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));


/************************************************/