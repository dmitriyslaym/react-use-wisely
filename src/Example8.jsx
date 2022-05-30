import { useState, useEffect, Children, cloneElement } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Parent = ({ children }) => {
  const [isSelectedIndex, setIsSelectedIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsSelectedIndex(prevState => {
        return prevState === Children.count(children) - 1 ? 0 : prevState + 1
      })
    }, 2000);

    return () => clearInterval(intervalId);
  }, [Children.count(children)]);

  return (
    <Box>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          isSelected: index === isSelectedIndex
        });
      })}
    </Box>
  )
};

const Instrument = ({ isSelected, symbol }) => (
  <Box sx={{ padding: '20px', background: isSelected ? 'green' : 'orange', color: 'white', width: '500px' }}>
    {symbol}
  </Box>
)

export const Example8 = () => {
  const [instruments, setInstruments] = useState(['AMZ', 'Apple', 'AWS', 'Google']);

  return (
    <Box>
      <Typography sx={{ marginBottom: '10px' }} variant="h4">Example 8</Typography>
      <Parent>
        {instruments.map((symbol) => <Instrument key={symbol} symbol={symbol} />)}
      </Parent>
      <Button
        sx={{ margin: '10px 0' }}
        type="button"
        variant="contained"
        color="primary"
        onClick={() => setInstruments(prevState => [...prevState, 'NewlyAdded'])}
      >
        Add New
      </Button>
    </Box>
  )
};
