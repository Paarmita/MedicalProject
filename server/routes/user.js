const express = require("express");
const {
  userById,
  allUsers,
  getUser,
  updateUser,
  deleteUser,
  userPhoto,
  addFollowing,
  addFollower,
  removeFollowing,
  removeFollower,
  findPeople,
  hasAuthorization
} = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");

const router = express.Router();

router.put("/user/follow", requireSignin, addFollowing, addFollower);
router.put("/user/unfollow", requireSignin, removeFollowing, removeFollower);

router.get("/users", allUsers); // access to all and no authentication for this
router.get("/user/:userId", requireSignin, getUser); // need middleware requireSignin
router.put("/user/:userId", requireSignin, hasAuthorization, updateUser); // PATCH is for making small update and PUT for whole obj update
// photo
router.get("/user/photo/:userId", userPhoto); // get photo with separate router to increase efficiency
router.delete("/user/:userId", requireSignin, hasAuthorization, deleteUser);

// who to follow
router.get("/user/findpeople/:userId", requireSignin, findPeople);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;
