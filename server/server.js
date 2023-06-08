// import statements
import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/usersRoute.js";
import restroRouter from "./routes/restroRoute.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/restros', restroRouter);


// Database connection and app:
mongoose.connect("mongodb://localhost:27017/TOMATO", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running with a proper database connection on Port", PORT);
    });
  })
  .catch((e) => {
    console.log(e);
  });
