import { useState, useEffect, useMemo, useCallback, useRef, useLayoutEffect } from 'react';
import axios from 'axios';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import LinearProgress from '@mui/material/LinearProgress';

const useArtistInfo = (options) => {
  const [data, setData] = useState();

  // const onSuccess = useRef(options.onSuccess);
  //
  // useLayoutEffect(() => {
  //   onSuccess.current = options.onSuccess;
  // }, [options.onSuccess]);

  useEffect(() => {
    console.log('useArtistInfo useEffect', { options });

    const formattedOptions = {
      method: 'GET',
      url: 'https://genius.p.rapidapi.com/search',
      params: { q: options.artist },
      headers: {
        'X-RapidAPI-Host': 'genius.p.rapidapi.com',
        'X-RapidAPI-Key': '442d201c6cmshf8b1d10d43629c2p16530djsn4f3910da4b95'
      }
    };

    setData(undefined);

    axios.request(formattedOptions).then((response) => {
      setData(response.data);
      // options.onSuccess({ artist: options.artist });
    }).catch((error) => {
      console.error(error);
    });
  }, [options]);

  return { data };
};

export const Example4 = () => {
  const [artist, setArtist] = useState('J. Cole');
  const [successAction, setSuccessAction] = useState('changeTitle');

  // const onSuccess = ({ artist }) => {
  //   if (successAction === 'changeTitle') {
  //     document.title = `${artist} music`;
  //   } else {
  //     document.title = `Music Info`;
  //     alert(`Loaded ${artist} music`);
  //   }
  // };

  const { data } = useArtistInfo({ artist });

  return (
    <Box>
      <Typography variant="h4">Example 4</Typography>
      <Box sx={{ marginTop: '20px', display: 'flex' }}>
        <FormControl sx={{ marginRight: '20px' }}>
          <InputLabel id="artist-select-label">Artist</InputLabel>
          <Select
            labelId="artist-select-label"
            id="artist"
            value={artist}
            label="Artist"
            onChange={(event) => {
              setArtist(event.target.value)
            }}
          >
            <MenuItem value="J. Cole">J. Cole</MenuItem>
            <MenuItem value="Linkin Park">Linkin Park</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel id="successAction-select-label">onSuccess Action</InputLabel>
          <Select
            labelId="successAction-select-label"
            id="successAction"
            value={successAction}
            label="onSuccess Action"
            onChange={(event) => {
              setSuccessAction(event.target.value)
            }}
          >
            <MenuItem value="changeTitle">Change Title</MenuItem>
            <MenuItem value="alert">Trigger Alert</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ marginTop: '10px' }}>
        {!!data ? (
          <List sx={{
            width: '100%',
            bgcolor: 'background.paper',
          }}>
            {data.response.hits.slice(0, 8).map(({ result }) => (
              <ListItem key={result.id}>
                <ListItemAvatar>
                  <Avatar alt={result.title} src={result.song_art_image_url} />
                </ListItemAvatar>
                <ListItemText primary={result.title} secondary={result.release_date_for_display} />
              </ListItem>
            ))}
          </List>
        ) : (
          <LinearProgress />
        )}
      </Box>
    </Box>
  )
};
