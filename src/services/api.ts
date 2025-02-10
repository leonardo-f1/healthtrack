import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Altere para a URL real do backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adiciona o token de autenticação se houver
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
