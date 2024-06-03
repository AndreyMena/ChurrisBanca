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
  putNewPost,
  putNewLike,
  putNewDislike,
  deletePost,
} = require("../controllers/socialController");

router.get("/:accountUsername", getAccountByUsername);
router.put("/user", putAccountByUsername);
router.get("/", getAccounts);
router.get("/posts/:userName", getPostsByUserName);
router.put("/newPost/:userName:postText", putNewPost);
router.put("/newLike", putNewLike);
router.put("/newDislike/:userName:postId", putNewDislike);
router.delete("/post", deletePost);

module.exports = router;
