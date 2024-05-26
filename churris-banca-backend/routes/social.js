/*
 Rutas de social
 host + /social
*/

const { Router } = require("express");
const router = Router();
const {
  getAccountByUsername,
  getPostsByUserName,
} = require("../controllers/socialController");

router.get("/:accountUsername", getAccountByUsername);
router.get("/posts/:userName", getPostsByUserName);

module.exports = router;
