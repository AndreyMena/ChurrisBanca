/*
 Rutas de bank
 host + /bank
*/
const { Router } = require("express");
const router = Router();
const {
  getBankAccountByUsername,
  getTransactionsByUserName,
  getBankAccountUsernames,
} = require("../controllers/bankController");

router.get("/account/:bankAccountUsername", getBankAccountByUsername);

router.get("/transactions/:userName", getTransactionsByUserName);

router.get("/accounts", getBankAccountUsernames);

module.exports = router;
