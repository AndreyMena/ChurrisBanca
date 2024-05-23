/*
 Rutas de social
 host + /social
*/

const { Router } = require("express");
const router = Router();
const { getPostsByUserName } = require("../controllers/socialController");

router.get("/posts/:userName", getPostsByUserName);

module.exports = router;
