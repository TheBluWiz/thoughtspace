const router = require('express').Router();

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/users.js');

router.route('/')
.get((req, res) => res.status(200).json(getUsers()))
.post((req, res) => res.status(200).json(createUser(req.body)))
.put((req, res) => res.status(200).json(updateUser(req.body)))
.delete((req, res) => res.status(200).json(deleteUser(req.body)))

router.route('/:id')
.get((req, res) => res.status(200).json(getUser(req.params.id)))

router.route('/:userId/friends/:friendId')
.post((req, res) => {
  data = {
    userId: req.params.userId,
    friendId: req.params.friendId
  }
  return res.status(200).json(addFriend(data))
})
.delete((req, res) => {
  data = {
    userId: req.params.userId,
    friendId: req.params.friendId
  }
  return res.status(200).json(removeFriend(data))
})

module.exports = router;