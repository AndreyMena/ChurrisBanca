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
  getAccounts,
} = require("../controllers/socialController");

router.get("/:accountUsername", getAccountByUsername);
router.put("/user/:accountUsername", putAccountByUsername);
router.get("/posts/:userName", getPostsByUserName);
router.put("/newPost/:userName:postText", putNewPost);
router.get("/", getAccounts);

module.exports = router;
