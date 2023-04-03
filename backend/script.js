require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

// route imports
const questionRoutes = require("./Question/routes");
const teacherRoutes = require("./Teacher/routes");
const testRoutes = require("./Test/routes");

const cors = require("cors");
app.use(cors());
app.options("*", cors());

// middleware
app.use(express.json());

app.use("/api/question", questionRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/test", testRoutes);

// DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7.
mongoose.set("strictQuery", false);

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
