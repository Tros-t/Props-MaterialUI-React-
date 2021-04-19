
import React from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 350,
    left: "25px"
    },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "100%"
    // height: "100%"
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  let count = 1;
  let sng = new Audio(props.path);

  let play = () => {
    
    
    if (count == 0 || count & 2 != 0) {
      sng.currentTime = 0
      sng.play();
      
    } else {
      sng.pause();
    }
    count += 1;
    
    console.log(count);
    
  }

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.song}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.singer}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton>

          </IconButton>
          <IconButton aria-label="play/pause" onClick={play}>
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton >
            {/* {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        // image="data:image/jpeg;base64,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"
        title={props.title}
        image = {props.image}
      />
    </Card>
  );
}
