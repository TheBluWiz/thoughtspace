const router = require('express').Router();

const {
  getThoughts,
  getThought,
  postThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughts.js');

router.route('/')
.get((req, res) => res.status(200).json(getThoughts()))
.post((req, res) => res.status(200).json(postThought(req.body)))
.put((req, res) => res.status(200).json(updateThought(req.body)))
.delete((req, res) => res.status(200).json(deleteThought(req.body)))

router.route('/:id')
.get((req, res) => res.status(200).json(getThought(req.params.id)))

router.route('/:thoughtId/reactions')
.post((req, res) => res.status(200).json(addReaction(req.params.thoughtId)))
.delete((req, res) => res.status(200).json(deleteReaction(req.params.thoughtId)))


module.exports = router;