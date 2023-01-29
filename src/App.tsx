import './styles.css';

import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppContextProvider } from './context/AppContext';
import Filters from './components/Filters';
import { Container, Typography } from '@mui/material';
import TableResults from './components/TableResult';

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
          <TableResults />
        </Container>
      </AppContextProvider>
    </QueryClientProvider>
  );
};

export default App;
