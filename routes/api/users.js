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
.get(async (req, res) => res.status(200).json(await getUsers()))
.post(async (req, res) => res.status(200).send(await createUser(req.body)))
.put(async (req, res) => res.status(200).json(await updateUser(req.body)))
.delete(async (req, res) => res.status(200).json(await deleteUser(req.body._id)))

router.route('/:id')
.get(async (req, res) => res.status(200).json(await getUser(req.params.id)))

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