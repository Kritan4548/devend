import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('http://54.251.86.111:8004'); // Update this line
    return response.data;
  } catch (error) {
    console.error('Error fetching data...', error);
    throw error;
  }
};
