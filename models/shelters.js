import mongoose from "mongoose";
import {PetSchema} from '../models/pets,js'
const shelterSchema = new mongoose.Schema( {

    name: {
        type:String,
        required: true,
    },
    city: {
        type:String,
        
    },

    state:{
        type: String,
        required: true,
 
    },
    maxSize: {
        type: Number
    },

    
})

export default new mongoose.model('Shelter', shelterSchema)