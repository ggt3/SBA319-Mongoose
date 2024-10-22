import mongoose from "mongoose";

const userSchema = new mongoose.Schema( {
    name: {
        type:String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength:20
    },
    password: {
        type:String,
        required: true,
        minLength: 3,
        maxLength:12,
    },
    email: {
        type:String,
        unique: true,
        // validate: {
        //     validator: function(v) {
        //         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        //     },
        //     message: "Please enter a valid email"
        // },
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please enter a valid email'],
  

        required: [true, "Email required"]
        
    },
    country: {
        type:String,
        enum : ['USA','CAN', 'MEX'],
    },
    pets: []

})

export default new mongoose.model('User', userSchema)