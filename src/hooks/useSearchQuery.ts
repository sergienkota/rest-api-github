import { useAppContext } from '../context/AppContext';
import useGithubRequest from './useGithubRequest';

const useSearchQuery = () => {
  const { language } = useAppContext();
  return useGithubRequest(
    `/repositories?q=is:public+language:${language}&sort=stars&order=desc`
  );
};

export default useSearchQuery;
