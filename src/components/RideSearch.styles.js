import { styled } from '@mui/material/styles';
import { Box, Paper, Button } from '@mui/material';

export const SearchContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #393E46 30%, #929AAB 90%)',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(6, 0),
  position: 'relative',
  overflow: 'hidden',
}));

export const VehicleIllustration = styled('img')(({ theme, ...props }) => ({
  position: 'absolute',
  ...props,
  opacity: 0.6,
}));

export const SearchPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: 'rgba(255,255,255,0.9)',
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  height: '56px',
  fontSize: '1.1rem',
}));