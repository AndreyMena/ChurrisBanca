/*
 Rutas de bank
 host + /bank
*/
const { Router } = require("express");
const router = Router();
const { getBankAccountById } = require("../controllers/bankController");

router.get("/:bankAccountId", getBankAccountById);

module.exports = router;
