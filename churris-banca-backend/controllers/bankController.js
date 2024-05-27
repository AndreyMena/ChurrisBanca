const { response } = require("express");
const openssl = require("openssl-wrapper");
const fs = require("fs");

// Borrar después
const bankAccounts = [
  { id: 1, userName: "andre.villegas", accountStatus: 1550000, currency: "Ch" },
  { id: 2, userName: "maria.hernandez", accountStatus: 150000, currency: "€" },
  {
    id: 2,
    userName: "roberto.chavez.madriz",
    accountStatus: 150000,
    currency: "Ch",
  },
];

// Elimminar despues
const transactionsExamples = [
  {
    transactionID: "87654321",
    originAccount: "paulina.rodriguez.jimenez", // Me lo envió
    targetAccount: "andre.villegas",
    transactionType: "received",
    transactionDate: "11-04-2024",
    transactionTime: "13:08",
    transactionAmount: 5500,
  },
  {
    transactionID: "56781234",
    originAccount: "andre.villegas", // Lo envío
    targetAccount: "paulina.rodriguez.jimenez",
    transactionType: "sent",
    transactionDate: "12-02-2022",
    transactionTime: "12:12",
    transactionAmount: 2000,
  },
  {
    transactionID: "43215678",
    originAccount: "ramina.chavez.gonzalez", // Me lo envió
    targetAccount: "andre.villegas",
    transactionType: "received",
    transactionDate: "12-03-2021",
    transactionTime: "10:25",
    transactionAmount: 2500,
  },
  {
    transactionID: "13572468",
    originAccount: "andre.villegas", // Lo envío
    targetAccount: "mario.bermudez.fuentes",
    transactionType: "sent",
    transactionDate: "15-02-2023",
    transactionTime: "09:09",
    transactionAmount: 1200,
  },
  {
    transactionID: "97531246",
    originAccount: "maria.rodriguez.hernandez", // Me lo envió
    targetAccount: "andre.villegas",
    transactionType: "received",
    transactionDate: "12-10-2022",
    transactionTime: "15:20",
    transactionAmount: 1400,
  },
  {
    transactionID: "11223344",
    originAccount: "andre.villegas", // Lo envío
    targetAccount: "josefo.villareal.sanchez",
    transactionType: "sent",
    transactionDate: "07-01-2020",
    transactionTime: "18:00",
    transactionAmount: 10000,
  },
  {
    transactionID: "12356748",
    originAccount: "fernando.villareal.sibaja",
    targetAccount: "josefo.villareal.sanchez",
    transactionType: "received",
    transactionDate: "01-04-2021",
    transactionTime: "20:20",
    transactionAmount: 10200,
  },
];

const getBankAccountByUsername = (req, res = response) => {
  const userName = req.params.bankAccountUsername;

  const bankAccount = bankAccounts.find(
    (bankAccount) => bankAccount.userName === userName
  );

  if (bankAccount) {
    return res.status(200).json({
      bankAccount: bankAccount,
    });
  }

  res.status(400).json({
    message: "Bank accounts not found",
  });
};

const getTransactionsByUserName = (req, res = response) => {
  const userName = req.params.userName;

  const transactions = transactionsExamples.filter(
    (transaction) =>
      transaction.originAccount === userName ||
      transaction.targetAccount === userName
  );

  if (transactions.length > 0) {
    return res.status(200).json({
      transactions: transactions,
    });
  }

  res.status(400).json({
    message: "No transactions found for this bank account",
  });
};

const puTransaction = (req, res = response) => {
  const userName = req.params.userName;
  const keyFile = req.file;
  const keyFilePath = "/var/www/churris-banca-backend/uploads" + req.file.filename;
  

  const certFilePath = "/etc/ssl/crt/" + userName + ".crt"; // TODO Cambiar
  if (!fs.existsSync(certFilePath)) {
    throw new Error("No certificate found for this user");
  }
  //const cert = fs.readFileSync(certFilePath, "utf-8");
  //console.log(cert);

  // Validar la clave privada contra el certificado
  openssl.exec(
    "x509",
    {
      in: certFilePath,
      noout: true,
      mod: true,
    },
    (err, certMod) => {
      if (err) {
        throw new Error("Error extracting certificate modulus");
      }

      openssl.exec(
        "rsa",
        {
          in: keyFilePath,
          noout: true,
          mod: true,
        },
        (err, keyMod) => {
          if (err) {
            throw new Error("Error extracting private key modulus");
          }

          if (certMod.trim() !== keyMod.trim()) {
            throw new Error("Private key does not match the certificate");
          }
        }
      );
    }
  );
};

module.exports = {
  getBankAccountByUsername,
  getTransactionsByUserName,
  puTransaction,
};
