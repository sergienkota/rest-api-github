import React from 'react';
import useSearchQuery from '../../hooks/useSearchQuery';
import {
  Alert,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { GithubData } from '../../common/types';

const TableResults = () => {
  const { loading, error, data } = useSearchQuery();

  if ( error ) {
    return (<Alert severity="error">Something went wrong ... !</Alert>);
  }

  if ( loading ) {
    return (
      <CircularProgress color="secondary" />
    );
  }

  const rows = loading ? [] : data.items;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="GitHub's repositories search data">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Forks</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Stars</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: GithubData) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.forks}</TableCell>
              <TableCell align="right">{row.size}</TableCell>
              <TableCell align="right">{row.stargazers_count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default TableResults;
