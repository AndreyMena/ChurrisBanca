import axios from 'axios';

// Usar variables de entorno para la configuración
const BASE_URL = process.env.REACT_APP_BASE_URL;
const ORIGIN = process.env.REACT_APP_ORIGIN;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Origin': ORIGIN }
});

export default axiosInstance;

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Origin': ORIGIN
  },
  withCredentials: true
});
