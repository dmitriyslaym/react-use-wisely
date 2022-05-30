import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Example3 = () => {
  const [count, setCount] = useState(0);

  // Multiply the current value each 10 seconds
  useEffect(() => {
    console.log('useEffect set new interval');

    const id = setInterval(() => {
      console.log('Triggering multiplication');
      setCount(count * 2);
    }, 10000);

    return () => {
      clearInterval(id);
    }
  }, []);

  return (
    <div>
      <Typography variant="h4">Example 3</Typography>
      <Typography variant="h6">Count: {count}</Typography>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => setTimeout(() => {
          setCount(count + 1);
        }, 1000)}
      >
        Increase with delay
      </Button>
    </div>
  )
};
