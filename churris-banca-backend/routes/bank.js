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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ dest: "uploads/" });

router.get("/account/:bankAccountUsername", getBankAccountByUsername);
router.get("/transactions/:userName", getTransactionsByUserName);
router.post("/transaction/:userName", upload.single("key"), puTransaction);

module.exports = router;
