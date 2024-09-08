import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Paper } from '@mui/material';
import { register } from '../services/api';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await register(name, email, password);
      console.log('Registration successful', response);
      // Handle successful registration (e.g., redirect to login page)
    } catch (err) {
      setError('Registration failed. Please try again.');
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
        src="/images/bicycle-illustration.svg"
        alt="Bicycle Illustration"
        sx={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '20%',
          opacity: 0.6,
          transform: 'rotate(30deg)',
        }}
      />
      <Box
        component="img"
        src="/images/car-illustration.svg"
        alt="Car Illustration"
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '25%',
          opacity: 0.6,
          transform: 'scaleX(-1)',
        }}
      />
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.9)' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom color="primary">
              Register
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                variant="outlined"
              />
              <TextField
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                variant="outlined"
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="outlined"
              />
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                margin="normal"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                variant="outlined"
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
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                startIcon={<PersonAddIcon />}
              >
                Register
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Register;