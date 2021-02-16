import React, { useState } from "react";
import { red } from "@material-ui/core/colors";
import Grid from '@material-ui/core/Grid';
import Card from './Card'

const Image = ({ image }) => {

    // console.log(image)
  const [show, setShow] = useState(false);
  const {farm,id,owner,secret,server,title} = image;
  console.log(title)

  return (
    <>
       <Grid item xs={3}>
        <Card  
        farm={farm}
        id={id} 
        owner={owner}
        secret = {secret}
        server={server}
        title={title}
        /> 
        </Grid>
    </>
  );
};

export default Image;