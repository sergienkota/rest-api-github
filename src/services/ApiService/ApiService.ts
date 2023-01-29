import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/search',
});

const queryFunction = async (queryKey: string) => {
  const { data } = await axiosInstance.get(`${queryKey}`);

  return data;
};

export default { queryFunction };
