import express from 'express'
import User from '../models/users.js'

const router = new express.Router()

//get all users
router.get('/', async (req, res) => {
    // res.send('Get All Users')
    try {
        const users = await User.find()
        res.send(users)
    } catch (error) {
        console.log(error);
        
    }
})

//create a new user
router.post('/', async (req, res) => {
    try {
        const { email, username } = req.body;
  
  // Assuming you have an email property in your user model, we check if the email in the request body exists in the database
  // This can take multiple fields as well.
  const usernameUnique = await User.exists({username:username})
  const exists = await User.exists({ email: email });
  if (usernameUnique) return res.json({ error: 'username taken' })
  if (exists) return res.json({ error: 'email already exists' });
else {
    const user = await User.create(req.body)
    res.send(user)
}
  

    } catch (error) {
        console.log(error);
    }
})

router.get('/:username', async (req, res) =>{
    try {
        const user = await User.findOne({username: req.params.username})
        //Need to read documentation on how to implement finding by id if not correct format
        // if (!user){
        //     return res.send('User not Found')
        // }   
        res.send(user)
    } catch (error) {
        console.log(error);
    }
} )

// router.delete('/:id', async (req, res) => {
//     try {
//         const deleteUser = await User.findByIdAndDelete(req.params.id)

//         res.send({
//             deletedUser: deleteUser,
//             message: 'User Deleted!'
//         })
//     } catch (error) {
//         console.log(error);
//     }
// })

// router.put('/:id', async (req, res) => {
//     try {
//         const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
//         res.send(updateUser)
//     } catch (error) {
//         console.log(error);
        
//     }
// })

export default router