import React from 'react'
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import {changePageTitle, changePageCopyRight} from '../../../../../../actions/app'

const styles = {
    table: {
      marginTop: 15,
      marginBottom: 15,
    },
    meetupDetailImg: {
        width: "100%",
        paddingRight: 20,
        height:250
    }
};

class MeetupDetailItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            joined: false
        }
    }

    handleClick = () => (
        this.setState((state) => ({
            joined: !state.joined
        }))
    )

    render(){
        const {ImageSource, MeetupDetailName, MeetupDetailLoc, MeetupDetailMembers, MeetupDetailOrg, classes, changePageTitleAct, changePageCopyRightAct} = this.props
        return(
            <Grid container item xs={12}>
                <Grid item xs={3}> 
                    <img className={classes.meetupDetailImg} src={ImageSource} />
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="h4">
                        {MeetupDetailName}
                    </Typography>
                    <Table className={classes.table}>
                        <TableRow>
                            <TableCell>Location</TableCell>
                            <TableCell>{MeetupDetailLoc}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Members</TableCell>
                            <TableCell>{MeetupDetailMembers}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Organizers</TableCell>
                            <TableCell>{MeetupDetailOrg}</TableCell>
                        </TableRow>
                    </Table>
                    <Button variant="contained" color="primary">Join Us</Button>
                    <br />
                    <br />
                    <Button variant="outlined" color="primary" onClick={() => {changePageTitleAct('qtmuan kuy')}}>Change Page Title</Button>
                    <br />
                    <br />
                    <Button variant="outlined" color="primary" onClick={() => {changePageCopyRightAct('2019')}}>Change Copy Right</Button>
                </Grid>
            </Grid>
        ) 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePageTitleAct: (newTitle) => dispatch(changePageTitle(newTitle)),
        changePageCopyRightAct: (newCopyRight) => dispatch(changePageCopyRight(newCopyRight)),
    }
}

MeetupDetailItem = withStyles(styles)(MeetupDetailItem)
MeetupDetailItem = connect(null, mapDispatchToProps)(MeetupDetailItem)

export default MeetupDetailItem