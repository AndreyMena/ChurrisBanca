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
  putNewFollow,
  putRemoveFollow,
  getViewOnlyUserProfile,
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
router.delete("/newFollow", putNewFollow);
router.delete("/removeFollow", putRemoveFollow);
router.delete("/seeProfileUser/:userName", getViewOnlyUserProfile);

module.exports = router;
