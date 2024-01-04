// api/axiosInstance.ts
import axios from 'axios';

export const Instance = axios.create({
  baseURL: 'http://localhost:4444/', // Substitua pela URL da sua API
  timeout: 10000, // Tempo máximo de espera para as solicitações
  headers: {
    'Content-Type': 'application/json',
  },
});