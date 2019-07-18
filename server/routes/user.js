const express = require("express");
const {
    userById,
    allUsers,
    getUser,
    updateUser,
    deleteUser,
    userPhoto
} = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");

const router = express.Router();

router.get("/users", allUsers); // access to all and no authentication for this
router.get("/user/:userId", requireSignin, getUser); // need middleware requireSignin
router.put("/user/:userId", requireSignin, updateUser);        // PATCH is for making small update and PUT for whole obj update
// photo
router.get("/user/photo/:userId", userPhoto);
router.delete("/user/:userId", requireSignin, deleteUser);

// any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;
