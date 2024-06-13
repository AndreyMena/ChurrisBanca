const allowedOrigins = [
  'https://localhost:443',  //App react
  'https://localhost:8443',  //Mismo node, Quitar?
  'https://localhost:80',
  'https://localhost:3000',
  'https://localhost',
  'https://172.24.131.193:443',
  'https://172.24.131.193:8443',
  'https://172.24.131.193:80',
  'https://172.24.131.193',
  'https://api.cloudinary.com/v1_1/churris-banca/upload',
  'https://www.churrisbancag3.ucr.ac.cr'
];

module.exports = allowedOrigins;