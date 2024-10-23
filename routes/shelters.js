import express from "express";
import Shelter from "../models/shelters.js";

const shelterRouter = new express.Router();

//get a list of all the shelters
shelterRouter.get("/", async (req, res) => {
  try {
    const shelter = await Shelter.find();
    res.send(shelter);
  } catch (error) {
    console.log(error);
  }
});

export default shelterRouter;
