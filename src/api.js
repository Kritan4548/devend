import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('http://api-kritan.learn.cloudlaya.com/'); // Update this line
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};
