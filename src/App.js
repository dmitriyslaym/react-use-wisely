import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from './logo.svg';
import './App.css';
import {AppRouter} from "./Router";
import theme from "./theme";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh'
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#282c34',
            color: 'white',
            padding: '15px'
          }}>
            <img src={logo} width="50px" alt="logo" />
            <Typography variant="h4">
              React.useWisely()
            </Typography>
          </Box>
          <Box sx={{
            padding: '20px',
            backgroundColor: '#3b3b47',
            flexGrow: 1,
            display: 'flex'
          }}>
            <AppRouter />
          </Box>
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
