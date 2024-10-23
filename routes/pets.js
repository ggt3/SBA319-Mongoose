import express from "express";
import Pet from "../models/pets.js";
import User from "../models/users.js";
const router = new express.Router();

//get all pets
router.get("/", async (req, res) => {
  // res.send('Get All Users')
  try {
    const pets = await Pet.find();
    res.send(pets);
  } catch (error) {
    console.log(error);
  }
});

//create a new pet
router.post("/new", async (req, res) => {
  try {
    const pet = await Pet.create(req.body);

    res.send(pet);
  } catch (error) {
    console.log(error);
  }
});

//queries all the pets of type "species" (capitalized)
router.get("/:species", async (req, res) => {
  try {
    const pet = await Pet.find({ species: req.params.species });
    res.send(pet);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:color", async (req, res) => {
  try {
    const pet = await Pet.find({ color: req.params.color });
    res.send(pet);
  } catch (error) {
    console.log(error);
  }
});
export default router;
