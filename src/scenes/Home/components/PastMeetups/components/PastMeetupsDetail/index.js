import React from 'react';
import PastMeetupItem from './PastMeetupItem';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import {fetchPastMeetups} from '../../../../../../actions/pastmeetup'

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
        marginBottom:20
    },
    paper: {
        padding: theme.spacing.unit * 2,
        color: theme.palette.text.secondary,
    },
});

class PastMeetupsDetail extends React.Component {
    componentDidMount(){
        this.props.fetchPastMeetups();
    }

    render(){
        const { PastMeetupsState, classes } = this.props
        const PastMeetupsSlice = PastMeetupsState.slice(0, 3)
        return(
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Grid container>
                            {
                                PastMeetupsSlice.map((data, index) => (
                                    <PastMeetupItem 
                                        key={index} 
                                        MeetupDate={data.release_date} 
                                        MeetupName={data.title} 
                                        WentCount={data.characters.length} 
                                        HrefTo={data.url}
                                    >
                                    </PastMeetupItem>
                                ))
                            }
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        PastMeetupsState: state.pastmeetups.pastMeetupData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPastMeetups: () => dispatch(fetchPastMeetups()),
    }
}

PastMeetupsDetail = connect(mapStateToProps, mapDispatchToProps)(PastMeetupsDetail)
PastMeetupsDetail =  withStyles(styles)(PastMeetupsDetail)

export default PastMeetupsDetail