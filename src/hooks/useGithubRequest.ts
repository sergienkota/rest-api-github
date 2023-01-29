import { useQuery } from 'react-query';
import ApiService from '../services/ApiService';

const useGithubRequest = (queryKey: string) => {
  const { isLoading, data, error } = useQuery(queryKey, () =>
    ApiService.queryFunction(queryKey)
  );

  return {
    loading: isLoading,
    data,
    error,
  };
};

export default useGithubRequest;
