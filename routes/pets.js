import express from 'express'
import Pet from '../models/pets.js'
import User from '../models/users.js'
const router = new express.Router()

//get all pets
router.get('/', async (req, res) => {
    // res.send('Get All Users')
    try {
        const pets = await Pet.find()
        res.send(pets)
    } catch (error) {
        console.log(error);
        
    }
})

//create a new pet
router.post('/new', async (req, res) => {
    try {
        const {owner} = req.body.owner
        const pet = await Pet.create(req.body)

        const user = await User.find({username:owner})
        res.send(pet)
    } catch (error) {
        console.log(error);
    }
})


//create a new pet
router.get('/:species', async (req, res) => {
    try {
        const pet = await Pet.create(req.body)
        res.send(pet)
    } catch (error) {
        console.log(error);
    }
})

export default router