/*
 Rutas de account
 host + /account
*/
const { Router } = require("express");
const router = Router();
const { getAccountByUsername } = require("../controllers/accountController");

router.get("/:accountUsername", getAccountByUsername);

module.exports = router;
