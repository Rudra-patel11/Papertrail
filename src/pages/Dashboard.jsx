import { Container, Typography, Grid, Paper } from '@mui/material';

function Dashboard() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, minHeight: 200 }}>
            Search and filters will go here
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, minHeight: 200 }}>
            Paper insights and results will go here
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;