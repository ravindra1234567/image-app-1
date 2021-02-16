import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-dom'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({ farm, id, owner, secret, server, title }) {
  let image = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`

  console.log(farm, id, owner, secret, server, title)
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const curTime = new Date().toLocaleString()

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    // <Card className={classes.root}>
      <GridListTile>
        <img src={image} alt={title} />
        <GridListTileBar
          title={title}
          subtitle={<span>by: {owner}</span>}
          actionIcon={
            <IconButton aria-label={`info about ${title}`} className={classes.icon}>
              <InfoIcon />
            </IconButton>
          }
        />
      </GridListTile>

    
  );
}
