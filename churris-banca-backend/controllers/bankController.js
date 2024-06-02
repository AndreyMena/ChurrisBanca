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

const puTransaction = async (req, res = response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Key is required" });
    }

    const userName = req.body.userName;
    const destinationAccountNickname = req.body.nicknameCuentaDestino;
    const amount = req.body.amount;
    if (!userName || !destinationAccountNickname || !amount) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const certFilePath = process.env.USER_CERT_FILE_PATH + userName + ".crt";
    if (!fs.existsSync(certFilePath)) {
      return res
        .status(400)
        .json({ message: "No certificate found for this user" });
    }

    const validateCertMsg = await validateCert(certFilePath);
    if (validateCertMsg !== "The certificate is signed by the CA") {
      return res.status(400).json({ message: validateCertMsg });
    }

    const validateKeyMsg = await validateKey(req.file.filename, certFilePath);
    if (validateKeyMsg !== "The private key matches the certificate") {
      return res.status(400).json({ message: validateKeyMsg });
    }

    const timestamp = new Date();

    console.log(validateKeyMsg);
    console.log(userName);
    console.log(destinationAccountNickname);
    console.log(amount);
    console.log(timestamp);

    //const sqlQuery = "INSERT INTO TRANSACCION (NicknameCuentaOrigen, NicknameCuentaDestino, Monto, FechaHora) VALUES(?, ?, ?, ?)";
    //await pool.query(sqlQuery, [userName, destinationAccountNickname, amount, timestamp]);
    res.status(200).json({ message: "Transaction succesful" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    throw new Error(error);
  }
};

const validateCert = (certFilePath) => {
  return new Promise((resolve, reject) => {
    const caFilePath = process.env.CA_CERT_FILE_PATH;
    if (!fs.existsSync(caFilePath)) {
      resolve("No certificate found for the CA");
    }

    openssl.exec(
      "verify",
      {
        CAfile: caFilePath,
        cert: certFilePath,
      },
      (err, buffer) => {
        if (err) {
          resolve("Error verifying the signature");
        }

        const result = buffer.toString();
        if (result.includes("OK")) {
          resolve("The certificate is signed by the CA");
        }
      }
    );
  });
};

const validateKey = (fileName, certFilePath) => {
  return new Promise((resolve, reject) => {
    const keyFilePath = process.env.USER_KEY_FILE_PATH + fileName;
    if (!fs.existsSync(keyFilePath)) {
      resolve("No private key found for this user");
    }

    openssl.exec(
      "x509",
      {
        in: certFilePath,
        noout: true,
        modulus: true,
      },
      (err, certMod) => {
        if (err) {
          resolve("Error extracting certificate modulus");
        }

        openssl.exec(
          "rsa",
          {
            in: keyFilePath,
            noout: true,
            modulus: true,
          },
          (err, keyMod) => {
            fs.unlink(keyFilePath, (err) => {
              if (err) {
                resolve("Error deleting the private key");
              }
            });

            if (err) {
              resolve("Error extracting private key modulus");
            }

            if (certMod.includes(keyMod)) {
              resolve("The private key matches the certificate");
            } else {
              resolve("The private key does not match the certificate");
            }
          }
        );
      }
    );
  });
};

module.exports = {
  getBankAccountByUsername,
  getTransactionsByUserName,
  puTransaction,
};
