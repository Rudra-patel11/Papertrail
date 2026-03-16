import { Container, Typography } from '@mui/material';

function Papers() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Papers
      </Typography>

      <Typography>
        This page will show the list of papers and details.
      </Typography>
    </Container>
  );
}

export default Papers;