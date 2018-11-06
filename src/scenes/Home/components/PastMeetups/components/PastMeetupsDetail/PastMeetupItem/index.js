import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const PastMeetupItem = ({MeetupDate, MeetupName, WentCount, HrefTo}) => (
    <Grid item xs={4}>
        <Typography variant="h6">{MeetupDate}</Typography>
        <Typography variant="h6">{MeetupName}</Typography>
        <Typography variant="subtitle2"><b>{WentCount}</b> Went</Typography>
        <br/>
        <Typography variant="subtitle2">
            <Button variant="contained" color="primary">View</Button>
        </Typography>
    </Grid>
)
export default PastMeetupItem