import { useState, useMemo, useTransition } from 'react';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const items = [];
for (let i = 0; i < 10000; i++) {
  items.push(`Inst ${i + 1}`);
}

const CustomList = ({ filter }) => {
  const filteredList = useMemo(() => {
    return items.filter((item) => item.includes(filter));
  }, [filter])

  return (
    <List>
      {filteredList.map(title => (
        <ListItem key={title}>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </List>
  )
}

export const Example9 = () => {
  const [filter, setFilter] = useState('');
  const [isPending, startTransaction] = useTransition();

  return (
    <Box>
      <Typography sx={{ marginBottom: '10px' }} variant="h4">Example 9</Typography>
      <div style={{ opacity: isPending ? 0.5 : 1 }}>
        <TextField
          sx={{ marginRight: '20px', width: '300px' }}
          id="filter"
          label="Filter"
          variant="outlined"
          onChange={(event) => {
            // setFilter(event.target.value)
            startTransaction(() => setFilter(event.target.value))
          }}
        />
        {isPending && (
          <Box width={300}>
            <LinearProgress />
          </Box>
        )}
        <CustomList filter={filter} />
      </div>
    </Box>
  )
};
