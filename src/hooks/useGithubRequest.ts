import { useCallback } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import ApiService from '../services/ApiService';

const useGithubRequest = (queryKey: string) => {
  const { isLoading, data, error } = useQuery(queryKey, () =>
    ApiService.queryFunction(queryKey)
  );
  const queryClient = useQueryClient();

  const invalidate = useCallback(() => {
    queryClient.invalidateQueries(queryKey);
  }, [queryClient, queryKey]);

  return {
    loading: isLoading,
    data,
    error,
    invalidate,
  };
};

export default useGithubRequest;
