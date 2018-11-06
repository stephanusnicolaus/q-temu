import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 20
    },
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    },
});

const AboutMeetupDetail = (props) => {
    const {AboutMeetupDesc, AboutMeetupTwitt, classes} = props
    return(
        <div className={classes.root}>
             <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="subtitle1">{AboutMeetupDesc}</Typography>
                        <Typography variant="subtitle1">{AboutMeetupTwitt}</Typography>
                    </Paper>
                </Grid>
             </Grid>
        </div>
    )
}

export default withStyles(styles)(AboutMeetupDetail)