import express from "express";
import mongoose from "mongoose";
import bodyParser from 'express'
import userRouter from './routes/user.js'
import recipeRouter from './routes/recipe.js'
import cors from 'cors'
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(bodyParser.json())
app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true

}))

// userRouter
app.use('/api', userRouter)

// recipeRouter
app.use('/api', recipeRouter)

mongoose
  .connect(
    "mongodb+srv://sumithalder7890:nrtjXwiJrgvfXwsL@cluster0.uy15olj.mongodb.net/",
    {
      dbName: "MERN_Recipe_YouTube",
    }
  )
  .then(() => console.log("MongoDB is Connected..!"))
  .catch((err) => console.log(err.message));

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));

// username = sumanmalakar2022;
// password = yq9euydwXXgWfkaN
