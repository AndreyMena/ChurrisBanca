/*
 Rutas de bank
 host + /bank
*/
const { Router } = require("express");
const router = Router();
const {
  getBankAccountById,
  getTransactionsByUserName,
  getBankAccountUsernames,
} = require("../controllers/bankController");

router.get("/account/:bankAccountId", getBankAccountById);

router.get("/transactions/:userName", getTransactionsByUserName);

router.get("/accounts", getBankAccountUsernames);

module.exports = router;
