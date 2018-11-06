import React, { Fragment } from 'react';
import AboutMeetupDetail from './components/AboutMeetupDetail';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
    title: {
      flexGrow: 1,
      marginTop: 20,
    }
};

const AboutMeetup = (props) => {
    const { classes } = props;
    return(
        <Fragment>
            <Grid container>
                <Grid item xs={11}>
                    <Typography variant="h5" color="inherit" className={classes.title}>About Meetup</Typography>
                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
            <AboutMeetupDetail 
                AboutMeetupDesc="Come and meet other developers interested in the Javascript and it's library in the Jakarta area." 
                AboutMeetupTwitt="Twitter: @JakartaJs and we use the hastag #jakartajs"
            >
            </AboutMeetupDetail>
        </Fragment>
    )
}

export default withStyles(styles)(AboutMeetup)

