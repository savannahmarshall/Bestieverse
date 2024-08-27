const router = require('express').Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../controllers/userController');

//api/users
router.route('/')
// GET all users
  .get(getUsers)   
// POST a new user     
  .post(createUser);    

//api/users/:userId
router.route('/:userId')
// GET a single user by id
.get(getUserById)
// PUT to update a user by id     
  .put(updateUser)   
// DELETE to remove a user by id   
  .delete(deleteUser);  

//api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
// POST to add a friend to a users friend list
.post(addFriend)  
// DELETE to remove a friend from a users friend list
.delete(removeFriend); 

module.exports = router;