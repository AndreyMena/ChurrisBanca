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
  putCheckFriendship,
  putNewFollow,
  putRemoveFollow,
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
router.put("/checkFriendship", putCheckFriendship);
router.put("/newFollow", putNewFollow);
router.put("/removeFollow", putRemoveFollow);

module.exports = router;
