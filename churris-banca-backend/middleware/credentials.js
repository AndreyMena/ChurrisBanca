const allowedOrigins = require('../config/allowedOrigins');

//Evitamos el error de cors Access-Control-Allow-Credentials en consola
//Verifica las credentials del header
const credentials = (req, res, next) => {
    console.log("holaaaa");/*
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Credentials', true);
    }*/
    next();
}

module.exports = credentials