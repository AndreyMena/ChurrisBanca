const allowedOrigins = [
  'http://localhost:443',  //App react
  'http://localhost:8443',  //Mismo node, Quitar?
  'http://localhost:80',
  'http://localhost',  
  'http://172.24.131.193:443',
  'http://172.24.131.193:8443', 
  'http://172.24.131.193:80',
  'http://172.24.131.193' 
];

module.exports = allowedOrigins;