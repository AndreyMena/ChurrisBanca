/*
 Rutas de social
 host + /social
*/

const { Router } = require("express");
const router = Router();
const {
  getAccountByUsername,
  putAccountByUsername,
  getAccounts,
  getPostsByUserName,
  getFollowedPostsByUserName,
  postNewPost,
  putNewLike,
  putRemoveLike,
  putNewDislike,
  putRemoveDislike,
  deletePost,
} = require("../controllers/socialController");

router.get("/:accountUsername", getAccountByUsername);
router.put("/user", putAccountByUsername);
router.get("/", getAccounts);
router.get("/posts/:userName", getPostsByUserName);
router.get("/followedPosts/:userName", getFollowedPostsByUserName);
router.post("/newPost", postNewPost);
router.put("/newLike", putNewLike);
router.put("/removeLike", putRemoveLike);
router.put("/newDislike", putNewDislike);
router.put("/removeDislike", putRemoveDislike);
router.delete("/post", deletePost);

module.exports = router;
