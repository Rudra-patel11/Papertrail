import { AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          PaperTrail
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={RouterLink} to="/papers">
            Papers
          </Button>
          <Button color="inherit" component={RouterLink} to="/graph">
            Graph
          </Button>
          <Button color="inherit" component={RouterLink} to="/login">
            Login
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;