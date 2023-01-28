import './styles.css';

import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContextProvider } from 'context/AppContext';
import Filters from './components/Filters';
import Table from './components/Table';
import { Container, Typography } from '@mui/material';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <Container className="App">
          <Typography variant="h4" component="h1" gutterBottom>
            REST API GitHub example
          </Typography>
          <Filters />
          <Table />
        </Container>
      </AppContextProvider>
    </QueryClientProvider>
  );
};

export default App;
