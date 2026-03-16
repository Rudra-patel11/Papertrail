import { Container, Typography, Paper } from '@mui/material';

function GraphView() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Citation Graph
      </Typography>

      <Paper sx={{ p: 3, minHeight: 400 }}>
        D3 graph visualization will go here
      </Paper>
    </Container>
  );
}

export default GraphView;