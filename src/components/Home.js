import React from 'react';
import { Container, Typography, Button, Box, Grid, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import SavingsIcon from '@mui/icons-material/Savings';

function Home() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(45deg, #393E46 30%, #929AAB 90%)',
        minHeight: '100vh',
        pt: 8,
        pb: 6,
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
          bottom: '-5%',
          left: '-5%',
          width: '25%',
          opacity: 0.6,
          transform: 'rotate(15deg)',
        }}
      />
      <Box
        component="img"
        src="/images/scooter-illustration.svg"
        alt="Scooter Illustration"
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          width: '20%',
          opacity: 0.6,
          transform: 'rotate(-15deg)',
        }}
      />
      <Box
        component="img"
        src="/images/bicycle-illustration.svg"
        alt="Bicycle Illustration"
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '5%',
          width: '15%',
          opacity: 0.6,
        }}
      />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h1"
          align="center"
          color="white"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            mb: 4,
          }}
        >
          RideShare
        </Typography>
        <Typography variant="h4" align="center" color="white" paragraph>
          Compare rides from multiple services in one place!
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Button
            component={RouterLink}
            to="/search"
            variant="contained"
            size="large"
            startIcon={<CompareArrowsIcon />}
            sx={{
              backgroundColor: '#F7F7F7',
              color: '#393E46',
              '&:hover': {
                backgroundColor: '#EEEEEE',
              },
              px: 4,
              py: 2,
              fontSize: '1.2rem',
            }}
          >
            Compare Rides Now
          </Button>
        </Box>
        <Grid container spacing={4} sx={{ mt: 8 }}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%', backgroundColor: 'rgba(255,255,255,0.9)' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <CompareArrowsIcon sx={{ fontSize: 60, color: '#393E46', mb: 2 }} />
                <Typography variant="h5" component="h2" align="center" gutterBottom>
                  Compare Fares
                </Typography>
                <Typography align="center">
                  Easily compare prices from multiple ride-sharing platforms in one place.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%', backgroundColor: 'rgba(255,255,255,0.9)' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <LocalTaxiIcon sx={{ fontSize: 60, color: '#393E46', mb: 2 }} />
                <Typography variant="h5" component="h2" align="center" gutterBottom>
                  Multiple Services
                </Typography>
                <Typography align="center">
                  Access a wide range of ride-sharing services through our decentralized platform.
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, height: '100%', backgroundColor: 'rgba(255,255,255,0.9)' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                <SavingsIcon sx={{ fontSize: 60, color: '#393E46', mb: 2 }} />
                <Typography variant="h5" component="h2" align="center" gutterBottom>
                  Save Money
                </Typography>
                <Typography align="center">
                  Find the best deals and save money on your rides with our comparison tool.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;