import React, { Fragment } from 'react';
import MemberListDetail from './components/MemberListDetail';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
    title: {
        flexGrow: 1,
        marginTop: 20,
    },
    seeAll: {
        flexGrow: 1,
        marginTop: 20,
        float: "right"
    }
};

const MemberList = (props) => {
    const { classes } = props
    return(
        <Fragment>
            <Grid container>
                <Grid item xs={11}>
                    <Typography variant="h5" color="inherit" className={classes.title}>Member List</Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="h6" color="inherit" className={classes.seeAll}>See All</Typography>
                </Grid>
            </Grid>
            <MemberListDetail></MemberListDetail>
        </Fragment>
    )
}

export default withStyles(styles)(MemberList)