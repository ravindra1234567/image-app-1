import './App.css';
import { FormControlLabel, Grid, CssBaseline, Button, Container, Avatar, TextField, makeStyles } from '@material-ui/core';
import { LockOutlinedIcon } from '@material-ui/lab'
import Autocomplete from "@material-ui/lab";
import axios, * as others from 'axios';
import Image from "./components/Image";

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import React, { useState } from 'react';

function App() {




  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    root: {
      flexGrow: 1,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
      width: 1200,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

  


  const classes = useStyles();

  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);


  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fd442c70879b7e1955e003b8452a0d70&tags=${query}&format=json&nojsoncallback=1`;
  const getData = async () => {
    const result = await axios.get(url);
    console.log(result.data.photos.photo);
    if (!result)
      console.log("Data not found");

    setImages(result.data.photos.photo)
    setQuery("");

  }
  const onSubmit = eve => {
    eve.preventDefault();
    getData();
  }

  const onChange = e => setQuery(e.target.value);

  return (
    <div>
      

      <CssBaseline />
      <div className={classes.paper}>
        <Container component="main" maxWidth="xs">
          <h1>Gallery</h1>
          <form className={classes.form} noValidate onSubmit={onSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="movie"
              label="Enter Image Type"
              name="gallery"
              autoComplete="gallery"
              autoFocus
              value={query}
              onChange={onChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Search
          </Button>
          </form>
        </Container>

        {console.log(query)}

        <div>
          {


            <div >
              {

               
              }
            </div>

          }
          <div>
            {
              <div>
                <div className={classes.root}>
                  <GridList cellHeight={180} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
                      {/* <ListSubheader component="div">December</ListSubheader> */}
                    </GridListTile>
                      {images.map((image, i) => <Image key={i} image={image} />)}
                  </GridList>
                </div>
              </div>
            }
          </div>

        </div>

      </div>



    </div>
  );
}

export default App;
