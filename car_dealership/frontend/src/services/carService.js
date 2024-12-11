import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cars';

export const fetchCars = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchCarById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};


// Fetch filtered cars
export const fetchFilteredCars = async (filters) => {
  const params = new URLSearchParams(filters).toString();
  const response = await axios.get(`${API_URL}/filter?${params}`);
  return response.data;
};


export const fetchCarByModel = async (model) => {
  try {
    const response = await axios.get(`${API_URL}/cars/model/${model}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching car details:", error);
    throw error;
  }
};

