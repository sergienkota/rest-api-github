import useSearchQuery from '../../hooks/useSearchQuery';

const Table = () => {
  const { loading, error } = useSearchQuery();

  if (error) {
    return <div>Error</div>;
  }

  return <div>Results: {loading}</div>;
};

export default Table;
