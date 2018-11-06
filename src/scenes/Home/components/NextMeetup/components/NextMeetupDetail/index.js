import React from 'react'

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

const NextMeetupDetail = (props) => {
    const { NextMeetupTitle, NextMeetupDate, classes } = props;
    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="subtitle2">{NextMeetupTitle}</Typography>
                        <br/>
                        <Typography variant="subtitle2">{NextMeetupDate}</Typography>
                        <br/>
                        <Typography variant="subtitle1">
                            Hello Javascript & Node.js Ninjas!
                            <br/>
                            Get Ready for our monthly meetup JakartaJS labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                            <br/>
                            Remember to bring a photo ID to get
                            <br/>
                            -------
                            <br/>
                            See you there!
                            <br/>
                            Best, Hengki, Giovanni, Sofian, Riza, Agung
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(NextMeetupDetail)