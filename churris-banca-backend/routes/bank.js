/*
 Rutas de bank
 host + /bank
*/
const { Router } = require("express");
const router = Router();
const multer = require("multer");
const {
  getBankAccountByUsername,
  getTransactionsByUserName,
  puTransaction,
} = require("../controllers/bankController");

const upload = multer({ dest: "uploads/" });

router.get("/account/:bankAccountUsername", getBankAccountByUsername);
router.get("/transactions/:userName", getTransactionsByUserName);
router.post("/transaction/:userName", upload.single("key"), puTransaction);

module.exports = router;
