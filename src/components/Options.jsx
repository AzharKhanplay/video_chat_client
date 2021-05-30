import React, { useContext, useState } from 'react';
import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    gridContainer: {
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
    },
    container: {
      width: '600px',
      margin: '35px auto',
      padding: 0,
      [theme.breakpoints.down('xs')]: {
        width: '80%',
      },
    },
    margin: {
      marginTop: 20,
    },
    padding: {
      padding: 20,
    },
    paper: {
      padding: '10px 20px',
      border: '2px solid black',
    },
  }));

const Options = ( {children} ) => {
    
    const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const classes = useStyles();

    return (
     <Container className={classes.container}>
         <Paper elevation={10} className={classes.paper}>
             <form className={classes.root} noValidate autoComplete="off">
                 <Grid container className={classes.gridContainer}>
                     <Grid item xs={12} md={6} className={classes.padding}>
                         <Typography gutterBottom variant="h6">Account Info</Typography>
                         <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth></TextField>
                         <CopyToClipboard text={me} className={classes.margin}>
                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
                     </Grid>
                     <Grid item xs={12} md={6} className={classes.padding}>
                         <Typography gutterBottom variant="h6">Make a call</Typography>
                         <TextField label="ID to Call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth></TextField>
                         { callAccepted && !callEnded ? (
                            <Button className={classes.margin} variant="contained" color="secondary" fullWidth startIcon={<PhoneDisabled fontSize="large" />}
                            onClick={leaveCall}>
                                Hang Up 
                            </Button>
                         ) : (
                            <Button className={classes.margin} variant="contained" color="primary" fullWidth startIcon={<Phone fontSize="large" />}
                            onClick={() => callUser(idToCall)}>
                              Call
                            </Button>
                         )}
                     </Grid>
                 </Grid>
             </form>
             {children}
         </Paper>
     </Container>
    );
};

export default Options