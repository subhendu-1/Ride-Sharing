import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Box, Paper, Slider } from '@mui/material';
import { searchRides } from '../services/api';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

function RideSearch() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [maxFare, setMaxFare] = useState(50);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await searchRides({ origin, destination, maxFare });
      const filteredRides = response.data.filter(ride => ride.fare <= maxFare);
      if (filteredRides.length > 0) {
        navigate('/comparison', { state: { rides: filteredRides, origin, destination } });
      } else {
        // Handle no results found
        console.log('No rides found');
        // Consider adding a user-friendly message here
      }
    } catch (error) {
      console.error('Ride search failed', error);
      // Consider adding error handling for the user here
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #393E46 30%, #929AAB 90%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 6,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Vehicle Illustrations */}
      <Box
        component="img"
        src="/images/scooter-illustration.svg"
        alt="Scooter Illustration"
        sx={{
          position: 'absolute',
          top: '5%',
          left: '5%',
          width: '15%',
          opacity: 0.6,
          transform: 'rotate(-30deg)',
        }}
      />
      <Box
        component="img"
        src="/images/bicycle-illustration.svg"
        alt="Bicycle Illustration"
        sx={{
          position: 'absolute',
          bottom: '5%',
          right: '5%',
          width: '15%',
          opacity: 0.6,
          transform: 'rotate(15deg)',
        }}
      />
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, backgroundColor: 'rgba(255,255,255,0.9)' }}>
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Search Rides
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <TextField
                  label="Origin"
                  fullWidth
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Destination"
                  fullWidth
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom>Max Fare: 
                  {maxFare}</Typography>
                <Slider
                  value={maxFare}
                  onChange={(e, newValue) => setMaxFare(newValue)}
                  onChangeCommitted={(e, newValue) => setMaxFare(newValue)}
                  aria-labelledby="max-fare-slider"
                  valueLabelDisplay="auto"
                  step={5}
                  marks
                  min={0}
                  max={100}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ height: '56px', fontSize: '1.1rem' }}
                  startIcon={<SearchIcon />}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default RideSearch;
