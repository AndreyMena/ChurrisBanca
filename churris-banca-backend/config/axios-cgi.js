const axios = require('axios');

const BASE_URL = "http://172.24.131.190:80/cgi-bin/cgi";

const cgiAxiosInstance = axios.create({
  baseURL: BASE_URL,
});

module.exports = cgiAxiosInstance;