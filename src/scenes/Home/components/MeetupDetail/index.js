import React from 'react'
import MeetupDetailItem from './components/MeetupDetailItem';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

const MeetupDetail = (props) => {
    const { classes } = props;
    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>  
                        <MeetupDetailItem 
                            ImageSource="http://www.bigfishevents.com.au/wp-content/uploads/2014/11/creative-event-management-1.jpg" 
                            MeetupDetailName="Hacktiv8 Meetup" 
                            MeetupDetailLoc="Jakarta, Indonesia" 
                            MeetupDetailMembers="1,078" 
                            MeetupDetailOrg="Adhy Wiranta" 
                        >
                        </MeetupDetailItem> 
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(styles)(MeetupDetail)