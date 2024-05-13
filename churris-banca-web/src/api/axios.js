import axios from 'axios';

//Probablemente sea bueno pasarlo a un .env

//Apunta al server de node (backend) donde nos comunicaremos
//con la base de datos de Churris-Banca, la que no tiene que 
//ver con cgi ni temas bancarios.
export default axios.create({
  baseURL: 'http://localhost:3500'  //Verificar puerto
});