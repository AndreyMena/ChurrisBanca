const { response } = require("express");
const cloudinary = require("cloudinary").v2;
const pool = require("../config/dbConnection");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAccountByUsername = async (req, res = response) => {
  try {
    const userName = req.params.accountUsername;
    if (!userName) {
      return res.status(400).json({ message: "userName is required" });
    }

    const sqlQuery =
      "SELECT Nombre, Apellidos, Email, Celular, Imagen FROM USUARIO WHERE NickName=?";
    const account = await pool.query(sqlQuery, userName);
    if (account.length <= 0) {
      return res.status(400).json({
        message: "Account not found",
      });
    }

    res.status(200).json({
      account: account[0],
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    throw new Error(error);
  }
};

const putAccountByUsername = async (req, res = response) => {
  try {
    const { userName, data, label } = req.body;
    if (!userName || !data || !label) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Evitar inyección SQL
    const validLabels = ["Email", "Celular", "Password"];
    if (!validLabels.includes(label)) {
      return res.status(400).json({ message: "Invalid field label" });
    }

    const sqlQuery = `UPDATE USUARIO SET ${label}=? WHERE NickName=?`;
    const result = await pool.query(sqlQuery, [data, userName]);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Account not found or no changes made" });
    }

    res.status(200).json({ message: "Account updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    throw new Error(error);
  }
};

const getAccounts = async (req, res = response) => {
  try {
    const sqlQuery = "SELECT Nickname, Nombre, Apellidos FROM USUARIO";
    const accounts = await pool.query(sqlQuery);
    if (accounts.length <= 0) {
      return res.status(400).json({
        message: "No bank account usernames found",
      });
    }

    res.status(200).json({
      accounts: accounts,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    throw new Error(error);
  }
};

const getPostsByUserName = async (req, res = response) => {
  try {
    const userName = req.params.userName;
    if (!userName) {
      return res.status(400).json({ message: "userName is required" });
    }

    const sqlQuery = `SELECT m.Id AS PostId, m.Nickname, m.Contenido, m.Imagen, m.Fecha, COALESCE(l.Likes, 0) AS Likes, COALESCE(d.Dislikes, 0) AS Dislikes FROM MENSAJE m LEFT JOIN (SELECT IdMensaje, COUNT(*) AS Likes FROM LIKES GROUP BY IdMensaje) l ON m.Id = l.IdMensaje LEFT JOIN (SELECT IdMensaje, COUNT(*) AS Dislikes FROM DISLIKES GROUP BY IdMensaje) d ON m.Id = d.IdMensaje WHERE m.Nickname = ?;`;
    const posts = await pool.query(sqlQuery, [userName]);
    if (posts.length <= 0) {
      return res.status(400).json({
        message: "No posts found for this user",
      });
    }

    posts.forEach((post) => {
      post.Fecha = post.Fecha !== undefined ? post.Likes.toString() : "0";
      post.Likes = post.Likes !== undefined ? post.Likes.toString() : "0";
      post.Dislikes =
        post.Dislikes !== undefined ? post.Dislikes.toString() : "0";
    });

    res.status(200).json({
      posts: posts,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    throw new Error(error);
  }
};

const putNewPost = async (req, res = response) => {
  const userName = req.params.userName;
  const postText = req.params.postText;

  const sqlQuery = `INSERT INTO MENSAJE (Nickname, Contenido, Imagen) VALUES (?, ?, NULL);`;
  await pool.query(sqlQuery, [userName, postText]);
};

const putNewLike = async (req, res = response) => {
  const userName = req.params.userName;
  const postId = req.params.postId;

  const sqlQuery = `INSERT INTO LIKES (IdMensaje, Nickname) VALUES (?, ?)`;
  await pool.query(sqlQuery, [postId, userName]);
};

const putNewDislike = async (req, res = response) => {
  const userName = req.params.userName;
  const postId = req.params.postId;

  const sqlQuery = `INSERT INTO DISLIKES (IdMensaje, Nickname) VALUES (?, ?)`;
  await pool.query(sqlQuery, [postId, userName]);
};

const deletePost = async (req, res = response) => {
  try {
    const { id, nickname, content, urlImage, dateTime } = req.body.payload;
    if (!id || !nickname || !content || !dateTime) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    if (urlImage) {
      const deletePostImageMsg = await deletePostImage(urlImage);

      if (deletePostImageMsg !== "Success deleting image") {
        return res.status(400).json({ message: deletePostImageMsg });
      }
    }

    const sqlQuery = `DELETE FROM MENSAJE WHERE Id=?`;
    const result = await pool.query(sqlQuery, id);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Post not found or no changes made" });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    throw new Error(error);
  }
};

const deletePostImage = async (urlImage) => {
  try {
    const parts = urlImage.split("/");
    const fileAndId = parts.slice(-2).join("/");
    const id = fileAndId.replace(/\.[^/.]+$/, "");

    const { result } = await cloudinary.uploader.destroy(id);
    if (result === "ok") {
      return "Success deleting image";
    } else {
      return "Image not found";
    }
  } catch (error) {
    return "Error deleting image";
  }
};

module.exports = {
  getAccountByUsername,
  putAccountByUsername,
  getAccounts,
  getPostsByUserName,
  putNewPost,
  putNewLike,
  putNewDislike,
  deletePost,
};
