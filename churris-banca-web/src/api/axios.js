import axios from "axios";

const BASE_URL = "https://localhost:8443";//"https://172.24.131.193:8443"; //Verificar puerto

//Probablemente sea bueno pasarlo a un .env

//Apunta al server de node (backend) donde nos comunicaremos
//con la base de datos de Churris-Banca, la que no tiene que
//ver con cgi ni temas bancarios.
export default axios.create({
  baseURL: BASE_URL,
});
