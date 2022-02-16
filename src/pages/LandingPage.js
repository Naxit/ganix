// material
import { styled } from '@mui/material/styles';
import { Container, Box } from '@mui/material';
// components
import Page from '../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <RootStyle title="Crypto market | Ganix" id="move_top">
      <Container maxWidth="xl">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>Welcome !</Box>
      </Container>
    </RootStyle>
  );
}
