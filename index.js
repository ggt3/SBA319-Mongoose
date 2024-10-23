import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import usersRouter from './routes/users.js';
import petsRouter from './routes/pets.js'
import shelterRouter from './routes/shelters.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT

mongoose.connect(process.env.MONGODB_URI)
// middlewares
console.log("connected to mongo")

app.use(express.json()); //parse json data

app.use("/users", usersRouter)
app.use("/pets", petsRouter)
app.use("/shelters", shelterRouter)

app.get("/", (req,res)=> {
    res.send("ok")
})

app.use((error, req, res, next) => {
    if (error.name === 'MongoServerError' && error.code === 11000) {
      next(new Error('There was a duplicate key error'));
    } else {
      next(); // The `updateOne()` call will still error out.
    }
  });

app.listen(PORT, () => console.log("server running on port: ", PORT))