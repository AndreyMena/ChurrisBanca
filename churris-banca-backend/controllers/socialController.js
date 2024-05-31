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
    message: "Account not found",
  });
};

const putAccountByUsername = async (req, res = response) => {
  const userName = req.params.accountUsername;
  const { data, label } = req.body;

  const sqlQuery = `UPDATE USUARIO SET ${label}=? WHERE NickName=?`;
  await pool.query(sqlQuery, [data, userName]);
};

const getPostsByUserName = async (req, res = response) => {
  const userName = req.params.userName;

  const sqlQuery = `SELECT m.Id AS PostId, m.Nickname, m.Contenido, m.Imagen, m.Fecha, COALESCE(l.Likes, 0) AS Likes, COALESCE(d.Dislikes, 0) AS Dislikes FROM MENSAJE m LEFT JOIN (SELECT IdMensaje, COUNT(*) AS Likes FROM LIKES GROUP BY IdMensaje) l ON m.Id = l.IdMensaje LEFT JOIN (SELECT IdMensaje, COUNT(*) AS Dislikes FROM DISLIKES GROUP BY IdMensaje) d ON m.Id = d.IdMensaje WHERE m.Nickname = ?;`;
  const posts = await pool.query(sqlQuery, [userName]);
  posts.forEach(post => {
    post.Fecha = post.Fecha !== undefined ? post.Likes.toString() : "0";
    post.Likes = post.Likes !== undefined ? post.Likes.toString() : "0";
    post.Dislikes = post.Dislikes !== undefined ? post.Dislikes.toString() : "0";
  });

  if (posts.length > 0) {
    return res.status(200).json({
      posts: posts,
    });
  }

  res.status(400).json({
    message: "No posts found for this user",
  });
};

const putNewPost = async (req, res = response) => {
  const userName = req.params.userName;
  const postText = req.params.postText;

  const sqlQuery = `NSERT INTO MENSAJE (Nickname, Contenido, Imagen) VALUES ( ?, ?, NULL );`;
  await pool.query(sqlQuery, [userName, postText]);
}

const getAccounts = async (req, res = response) => {
  const sqlQuery = "SELECT Nickname, Nombre, Apellidos FROM USUARIO";
  const accounts = await pool.query(sqlQuery);

  if (accounts) {
    return res.status(200).json({
      accounts: accounts,
    });
  }

  res.status(400).json({
    message: "No bank account usernames found",
  });
};

module.exports = {
  getAccountByUsername,
  putAccountByUsername,
  getPostsByUserName,
  putNewPost,
  getAccounts,
};
