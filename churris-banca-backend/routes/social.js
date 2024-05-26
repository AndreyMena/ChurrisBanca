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
  getAccounts,
} = require("../controllers/socialController");

router.get("/:accountUsername", getAccountByUsername);
router.put("/user/:accountUsername", putAccountByUsername);
router.get("/posts/:userName", getPostsByUserName);
router.get("/accounts", getAccounts);

module.exports = router;
