import mongoose from "mongoose";

const petSchema = new mongoose.Schema( {
    species:{
        type: String,
        required: true,
        enum : ['DOG','CAT','COW','GOAT','PIG','FISH','HORSE', 'RABBIT', 'BIRD'],
    },
    name: {
        type:String,
        required: true,
        minLength: 3,
        maxLength:12,
    },
    color: {
        type:String,
        enum : ['BLUE','GREEN','YELLOW','RED']
    },
    owner: {
        type:String,
        
    }
})

export default new mongoose.model('Pet', petSchema)