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
} = require("../controllers/socialController");

router.get("/:accountUsername", getAccountByUsername);
router.put("/user/:accountUsername", putAccountByUsername);
router.get("/posts/:userName", getPostsByUserName);

module.exports = router;
