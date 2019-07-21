const express = require("express");
const {
  getPosts,
  createPost,
  postsByUser,
  postById,
  isPoster,
  updatePost,
  deletePost,
  photo,
  singlePost,
  like,
  unlike
} = require("../controllers/post");
const { requireSignin } = require("../controllers/auth");
const { userById } = require("../controllers/user");
const { createPostValidator } = require("../validator");
// const postController = require("../controllers/post");
// router.get("/", postController.getPosts);
// router.post("/post", postController.createPost);
const router = express.Router();

router.get("/posts", getPosts);

// like unlike
router.put("/post/like", requireSignin, like);
router.put("/post/unlike", requireSignin, unlike);

router.post(
  // use requireSignin as middleware
  "/post/new/:userId", // in order to post something we need userId
  requireSignin,
  createPost,
  createPostValidator // this validator should be at last bz then it shows error in the starting only of title & body
);
router.get("/posts/by/:userId", requireSignin, postsByUser); // no mandatory to add requireSignin as userId is there in params
router.get("/post/:postId", singlePost);
router.put("/post/:postId", requireSignin, isPoster, updatePost);
router.delete("/post/:postId", requireSignin, isPoster, deletePost);

// photo
router.get("/post/photo/:postId", photo);

// any route containing :userId, our app will first execute userById()
router.param("userId", userById);
// any route containing :postId, our app will first execute postById()
router.param("postId", postById);

module.exports = router;
