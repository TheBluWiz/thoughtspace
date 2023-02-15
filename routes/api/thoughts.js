const router = require('express').Router();

const {
  getThoughts,
  getThought,
  postThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughts.js');

router.route('/')
.get(async (req, res) => res.status(200).json(await getThoughts()))
.post(async (req, res) => res.status(200).json(await postThought(req.body)))
.put(async (req, res) => res.status(200).json(await updateThought(req.body)))
.delete(async (req, res) => res.status(200).json(await deleteThought(req.body._id)))

router.route('/:id')
.get(async (req, res) => res.status(200).json(await getThought(req.params.id)))

router.route('/:thoughtId/reactions')
.post(async (req, res) => {
  const data = {
    thoughtId: req.params.thoughtId,
    reactionBody: req.body.reactionBody,
    username: req.body.username
  }
  res.status(200).json(await addReaction(data))
})
.delete(async (req, res) => {
  data = {
    thoughtId: req.params.thoughtId,
    reactionId: req.body.reactionId
  }
  res.status(200).json(await removeReaction(data))
})


module.exports = router;