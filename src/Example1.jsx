import { useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';

let indexForName = 0;
const generateName = () => `Item-${indexForName++}`;

export const Example1 = () => {
  const [items, setItems] = useState(() => [
    { name: generateName() }
  ]);

  return (
    <Box>
      <Typography variant="h4">Example 1</Typography>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon
                  onClick={() => {
                    setItems(
                      prevItems => prevItems.filter((_, itemIndex) => index !== itemIndex)
                    )
                  }}
                />
              </IconButton>
            }
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
              />
            </ListItemIcon>

            <ListItemText
              primary={item.name}
            />
          </ListItem>
        ))}
      </List>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={() => setItems(
          prevItems => [...prevItems, { name: generateName() }]
        )}
      >
        Add new
      </Button>
    </Box>
  )
};
