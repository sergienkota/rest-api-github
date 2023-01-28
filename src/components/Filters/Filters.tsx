import { Box, Grid } from '@mui/material';
import LanguageSelect from 'components/LanguageSelect';

const Filters = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <LanguageSelect />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filters;
