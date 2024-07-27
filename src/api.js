import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('http://52.221.235.70:8000/'); // Update this line
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};
