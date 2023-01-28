import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/search',
});

const queryFunction = async (queryKey: string) => {
  const { data } = await axiosInstance.get(`${queryKey}`);

  console.log('data: ');
  console.log(data);
  return data;
};

export default {
  queryFunction,
};
