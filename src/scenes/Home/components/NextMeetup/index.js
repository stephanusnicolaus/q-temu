import React, { Fragment } from 'react'
import NextMeetupDetail from './components/NextMeetupDetail';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const styles = {
    title: {
      flexGrow: 1,
      marginTop: 20,
    }
};

const NextMeetup = (props) =>{
    const { classes } = props;
    return( 
        <Fragment>
            <Grid container>
                <Grid item xs={11}>
                    <Typography variant="h5" color="inherit" className={classes.title}>Next Meetup</Typography>
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
            <NextMeetupDetail 
                NextMeetupTitle="Awesome Meetup and Event" 
                NextMeetupDate="25 Januari 2019"
            ></NextMeetupDetail>
        </Fragment>
    )
}

export default withStyles(styles)(NextMeetup)
