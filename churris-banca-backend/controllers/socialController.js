const { response } = require("express");

// TODO
const getPostsByUserName = (req, res = response) => {
  const userName = req.params.userName;

  res.status(400).json({
    message: "No posts found for this user",
  });
};

module.exports = {
  getPostsByUserName,
};
