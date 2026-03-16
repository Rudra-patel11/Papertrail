import { Container, Typography, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Home() {
  return (
    <Container sx={{ py: 6 }}>
      <Stack spacing={3}>
        <Typography variant="h3" fontWeight="bold">
          PaperTrail
        </Typography>

        <Typography variant="h6">
          A research paper discovery and visualization app.
        </Typography>

        <Typography>
          Search papers, explore citations, and visualize research connections in one place.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button variant="contained" component={RouterLink} to="/dashboard">
            Open Dashboard
          </Button>
          <Button variant="outlined" component={RouterLink} to="/login">
            Login
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Home;