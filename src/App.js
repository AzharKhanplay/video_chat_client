import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Notification from './components/Notifications';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';

const useStyle = makeStyles((theme) => ({
  appBar: {
    padding: '20px',
  },
}));

const App = () => {
   const classes = useStyle();
   return(
     <div>
       <AppBar className={classes.appBar}>
        <Typography varient="h2" align="center">Welcome to Shere.</Typography>
       </AppBar>
       <VideoPlayer></VideoPlayer>
       <Options>
         <Notification></Notification>
       </Options>
     </div>
   )
}

export default App;