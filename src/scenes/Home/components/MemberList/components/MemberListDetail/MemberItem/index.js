import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const styles = {
    avatar: {
      margin: 10,
    },
    container:{
        marginBottom: 15
    }
};

const MemberItem = ({MemberType, MemberName, MemberCount, classes, userID }) => (
        <Grid item xs={4}>
            <Grid container className={classes.container}>
                <Grid item xs={2}>
                    <Link to={`/profile/${userID}`}>
                        <Avatar className={classes.avatar}>{MemberName.substr(0,1)}</Avatar>
                    </Link>
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="subtitle1">
                        {MemberType}
                        <br/>
                        {MemberName}
                        <br/>
                        {MemberCount}
                        <br/>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
)

export default withStyles(styles)(MemberItem);