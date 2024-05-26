import axios from 'axios';

const BASE_URL = 'http://localhost:3003';  //Verificar puerto

//Probablemente sea bueno pasarlo a un .env

//Apunta al server de node (backend) donde nos comunicaremos
//con la base de datos de Churris-Banca, la que no tiene que 
//ver con cgi ni temas bancarios.
export default axios.create({
  baseURL: BASE_URL
});