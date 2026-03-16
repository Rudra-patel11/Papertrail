import { Container, Typography } from '@mui/material';

function NotFound() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        404 - Page Not Found
      </Typography>
    </Container>
  );
}

export default NotFound;