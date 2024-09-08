import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="absolute">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            RideShare
          </Typography>
          <Box>
            <Button color="inherit" component={RouterLink} to="/" sx={{ color: 'white' }}>
              Home
            </Button>
            <Button color="inherit" component={RouterLink} to="/search" sx={{ color: 'white' }}>
              Search
            </Button>
            <Button color="inherit" component={RouterLink} to="/login" sx={{ color: 'white' }}>
              Login
            </Button>
            <Button color="inherit" component={RouterLink} to="/register" sx={{ color: 'white' }}>
              Register
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
