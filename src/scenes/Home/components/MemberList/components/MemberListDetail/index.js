import React from 'react';
import MemberItem from './MemberItem';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux'
import {fetchMembers} from '../../../../../../actions/member'

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

class MemberListDetail extends React.Component {

    componentDidMount(){
        this.props.fetchMembers()
    }

    render(){
        const { MemberListState, classes } = this.props
        const MemberListSlice = MemberListState.slice(0, 5)

        return(
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Grid container>
                            {
                                MemberListSlice.map((data, index) => (
                                    <MemberItem 
                                        key={index} 
                                        MemberType={data.birth_year} 
                                        MemberName={data.name} 
                                        MemberCount={data.mass}
                                        userID={index+1}
                                    >
                                    </MemberItem>
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
        MemberListState: state.members.memberData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMembers: () => dispatch(fetchMembers()),
    }
}


MemberListDetail = connect(mapStateToProps, mapDispatchToProps)(MemberListDetail)
MemberListDetail = withStyles(styles)(MemberListDetail)

export default MemberListDetail