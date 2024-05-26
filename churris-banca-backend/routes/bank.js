/*
 Rutas de bank
 host + /bank
*/
const { Router } = require("express");
const router = Router();
const {
  getBankAccountByUsername,
  getTransactionsByUserName,
} = require("../controllers/bankController");

router.get("/account/:bankAccountUsername", getBankAccountByUsername);

router.get("/transactions/:userName", getTransactionsByUserName);

module.exports = router;
