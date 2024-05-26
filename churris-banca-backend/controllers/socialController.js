const { response } = require("express");
const pool = require("../config/dbConnection");

const getAccountByUsername = async (req, res = response) => {
  const userName = req.params.accountUsername;

  const sqlQuery =
    "SELECT Nombre, Apellidos, Email, Celular FROM USUARIO WHERE NickName=?";
  const account = await pool.query(sqlQuery, userName);

  if (account) {
    return res.status(200).json({
      account: account[0],
    });
  }

  res.status(400).json({
    message: "Accounts not found",
  });
};

const putAccountByUsername = async (req, res = response) => {
  const userName = req.params.accountUsername;
  const { data, label } = req.body;

  const sqlQuery = `UPDATE USUARIO SET ${label}=? WHERE NickName=?`;
  await pool.query(sqlQuery, [data, userName]);
};

// TODO
const getPostsByUserName = (req, res = response) => {
  const userName = req.params.userName;

  res.status(400).json({
    message: "No posts found for this user",
  });
};

module.exports = {
  getAccountByUsername,
  putAccountByUsername,
  getPostsByUserName,
};
