const router = require('express').Router();
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../controllers/thoughtController');

//api/thoughts
router.route('/')
// GET all thoughts
  .get(getThoughts)  
// POST to create a new thought      
  .post(createThought);    

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
// GET a single thought by its id
  .get(getThoughtById)  
// PUT to update a thought by its id   
  .put(updateThought)
// DELETE to remove a thought by its id      
  .delete(deleteThought);  

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
// POST to create a reaction stored in a thoughts reactions array
  .post(addReaction)
// DELETE to remove a reaction by reactionId        
  .delete(removeReaction);   

module.exports = router;