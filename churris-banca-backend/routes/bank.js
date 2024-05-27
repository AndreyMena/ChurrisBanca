/*
 Rutas de bank
 host + /bank
*/
const { Router } = require("express");
const router = Router();
const {
  getBankAccountByUsername,
  getTransactionsByUserName,
  puTransaction,
} = require("../controllers/bankController");

router.get("/account/:bankAccountUsername", getBankAccountByUsername);
router.get("/transactions/:userName", getTransactionsByUserName);
router.post("/transaction/:userName", puTransaction);

module.exports = router;
