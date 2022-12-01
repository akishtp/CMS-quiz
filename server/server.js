require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

// route imports
const userRoutes = require("./routes/user");

app.use(express.json());
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
