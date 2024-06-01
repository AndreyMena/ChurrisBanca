/*
 Rutas de social
 host + /social
*/

const { Router } = require("express");
const router = Router();
const {
  getAccountByUsername,
  putAccountByUsername,
  getPostsByUserName,
  putNewPost,
  putNewLike,
  putNewDislike,
  getAccounts,
} = require("../controllers/socialController");

router.get("/:accountUsername", getAccountByUsername);
router.put("/user", putAccountByUsername);
router.get("/", getAccounts);
router.get("/posts/:userName", getPostsByUserName);
router.put("/newPost/:userName:postText", putNewPost);
router.put("/newLike/:userName:postId", putNewLike);
router.put("/newDislike/:userName:postId", putNewDislike);

module.exports = router;
