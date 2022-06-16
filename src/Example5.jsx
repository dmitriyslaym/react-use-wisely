import { useState } from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { flushSync } from 'react-dom';

export const Example5 = () => {
  const [artist, setArtist] = useState('');
  const [genre, setGenre] = useState('');

  console.log('Example5 render', { artist, genre });

  return (
    <Box>
      <Typography variant="h4">Example 5</Typography>
      <Box sx={{ marginTop: '20px' }}>
        <TextField
          sx={{ marginRight: '20px', width: '300px' }}
          id="artist"
          label="Artist"
          variant="outlined"
          onChange={(event) => {
            setArtist(event.target.value)
          }}
          value={artist}
        />
        <FormControl sx={{ width: '300px' }}>
          <InputLabel id="genre-select-label">Artist</InputLabel>
          <Select
            labelId="genre-select-label"
            id="genre"
            value={genre}
            label="Genre"
            onChange={(event) => {
              setGenre(event.target.value)
            }}
          >
            <MenuItem value="Jazz">Jazz</MenuItem>
            <MenuItem value="Hip-Hop">Hip-Hop</MenuItem>
            <MenuItem value="Metal">Metal</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ marginTop: '20px' }}>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={() => {
            setTimeout(() => {
              // setArtist('');
              // setGenre('');

              flushSync(() => {
                setArtist('');
              })
              flushSync(() => {
                setGenre('');
              })
            }, 500)
          }}
        >
          Reset filters
        </Button>
      </Box>
    </Box>
  )
};
