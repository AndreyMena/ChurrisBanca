const express = require("express");
require("dotenv").config();

// Crear el servidor de express
const app = express();

const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const verifyJWT = require("./middleware/verifyJWT");
const cookieParser = require("cookie-parser");
const credentials = require("./middleware/credentials");
var fs = require("fs");
const https = require("https");
const mariadb = require("mariadb");
const { Certificate } = require("crypto");
//const connectDB = require('./config/dbConn');  //Aqui ira la conexion con mariadb

// Se llamara al metodo de dbConn a MariaDB
//connectDB();

/* MIDDLEWARE app.use() */

// Verifica credentials en el header de cada entrada
app.use(credentials);

// Cross Origin Resource Sharing, resuelve errores en el front de COR
app.use(cors(corsOptions));

// Express formateo de las URLs
app.use(express.urlencoded({ extended: false }));

// Lectura y parseo del body
// Las pasa a json
app.use(express.json());

//Middleware para cookies
app.use(cookieParser());

// Directorio Público
//serve static files
//app.use('/', express.static(path.join(__dirname, '/public')));

/* RUTAS */
app.use("/", require("./routes/root"));
app.use("/auth", require("./routes/auth"));
//app.use('/register', require('./routes/register'));  //TODO, mejor implementarlo para agregar y hashear pass de nuevos users
app.use("/refresh", require("./routes/refresh"));
app.use("/logout", require("./routes/logout"));

app.use("/social", require("./routes/social"));
//Impide hacer post sin sin estar logeado a las rutas que se encuentren abajo
app.use(verifyJWT);
app.use("/bank", require("./routes/bank"));


app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// Escuchar peticiones
https.createServer({
  cert: fs.readFileSync("churris-banca.crt"),
  key: fs.readFileSync("churris-banca.key")//,
  //ca: fs.readFileSync("rootCACert.crt"),  // Imprecindible al montar en apache
}, app).listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
