import api from './api';

export const getHealthData = async () => {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erro ao buscar dados de saúde';
  }
};

export const addHealthEntry = async (data: any) => {
  try {
    const response = await api.post('/health', data);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Erro ao adicionar entrada';
  }
};

