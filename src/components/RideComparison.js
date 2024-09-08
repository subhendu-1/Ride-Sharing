import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography, Grid, Paper, Box, Button, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function RideComparison() {
  const location = useLocation();
  const navigate = useNavigate();
  const { rides, origin, destination } = location.state || { rides: [], origin: '', destination: '' };

  const handleBack = () => {
    navigate('/search');
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #393E46 30%, #929AAB 90%)',
        minHeight: '100vh',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.9)' }}>
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={handleBack}
            sx={{ mb: 2 }}
          >
            Back to Search
          </Button>
          <Typography variant="h4" gutterBottom color="primary">
            Ride Comparison
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            From: {origin} To: {destination}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Grid container spacing={3}>
            {rides.map((ride, index) => (
              <Grid item xs={12} sm={6} md={4} key={ride.id || index}>
                <Paper elevation={2} sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" gutterBottom>
                    {ride.service}
                  </Typography>
                  <Typography variant="h4" color="primary" sx={{ mb: 2 }}>
                    {ride.fare}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Estimated Time: {ride.estimatedTime}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    Distance: {ride.distance}
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Button variant="contained" color="primary" fullWidth>
                    Book Now
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default RideComparison;