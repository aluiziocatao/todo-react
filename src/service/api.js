import axios from 'axios';

const api = axios.create({
  baseURL: 'https://demonstracao-deploy.herokuapp.com/',
});

export default api;