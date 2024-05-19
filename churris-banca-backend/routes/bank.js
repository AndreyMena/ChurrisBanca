/*
 Rutas de bank
 host + /bank
*/
const { Router } = require("express");
const router = Router();
const {
  getBankAccountById,
  getTransactionsByUserName,
} = require("../controllers/bankController");

router.get("/:bankAccountId", getBankAccountById);

router.get("/transactions/:userName", getTransactionsByUserName);

module.exports = router;
