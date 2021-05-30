import React, { useContext } from 'react';

import { Grid, Typography, Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px',
  },
  gridContainer: {
    justifyContent:'center',
  },
  paper: {
    padding: '10px',
    margin: '10px',
    border:'2px solid #000',
  }
}));

const VideoPlayer = () =>{
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
  const classes = useStyles();
   //myVideo = React.createRef();
    return (
      <Grid container className={classes.gridContainer}>
       {/* ownVideo */}
       { stream && (
         <Paper className={classes.paper}>
           <Grid item xs={12} md={6}>
             <Typography varient="h5" gutterBottom>{name || 'Name'}</Typography>
             <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
           </Grid>
         </Paper>
      )}
       {/* ownVideo */}
       {/* userVideo */}
       { callAccepted && !callEnded && (
       <Paper className={classes.paper}>
           <Grid item xs={12} md={6}>
             <Typography varient="h5" gutterBottom>{ call.name || 'Name'}</Typography>
             <video playsInline muted ref={userVideo} autoPlay className={classes.video} />
           </Grid>
         </Paper>
       )}
       {/* userVideo */}
      </Grid>
    )
}

export default VideoPlayer;