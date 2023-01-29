import { useAppContext } from '../context/AppContext';
import useGithubRequest from './useGithubRequest';

const useSearchQuery = () => {
  const { languageQuery } = useAppContext();
  return  useGithubRequest(
    `/repositories?q=is:public${languageQuery}&sort=stars&order=desc`
  );
};

export default useSearchQuery;
