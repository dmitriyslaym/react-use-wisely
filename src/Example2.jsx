import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Need to count from scratch each time when the color is changed
const ExternalComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('ExternalComponent is mounted');
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <Box sx={{ padding: '10px' }}>
      Count: {count}
    </Box>
  )
}

export const Example2 = () => {
  const [color, setColor] = useState('orange');

  return (
    <Box style={{ background: color, padding: '100px', width: '200px' }}>
      <Typography variant="h4">Example 2</Typography>
      <ExternalComponent key={color} />
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => setColor(prevColor => prevColor === 'orange' ? 'green' : 'orange')}
      >
        Change color
      </Button>
    </Box>
  )
};
