import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import { login } from '../services/api';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await login(email, password);
      // Handle successful login (e.g., store token, redirect)
      console.log('Login successful', response);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #393E46 30%, #929AAB 90%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Vehicle Illustrations */}
      <Box
        component="img"
        src="/images/car-illustration.svg"
        alt="Car Illustration"
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '15%',
          opacity: 0.6,
          transform: 'rotate(-15deg)',
        }}
      />
      <Box
        component="img"
        src="/images/scooter-illustration.svg"
        alt="Scooter Illustration"
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '15%',
          opacity: 0.6,
          transform: 'rotate(15deg)',
        }}
      />
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LockOpenIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
          <Typography component="h1" variant="h5" gutterBottom>
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;