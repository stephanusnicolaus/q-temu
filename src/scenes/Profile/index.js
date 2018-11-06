import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    avatar: {
      margin: 10,
    },
    container:{
        marginBottom: 15
    }
};

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            PastMeetupsDetail: []
        }
    }

    componentDidMount() {
        const { match } = this.props
        axios
          .get(`https://swapi.co/api/people/${match.params.id}`)
          .then(response => (
            this.setState({ PastMeetupsDetail: response.data })
        ));
    }

    render(){
        const { classes } = this.props
        return (
            <Fragment>
                <Grid item xs={4}>
                    <Grid container className={classes.container}>
                        <Grid item xs={2}>
                            <Avatar className={classes.avatar}>{typeof this.state.PastMeetupsDetail.name !== 'undefined' ? this.state.PastMeetupsDetail.name.substr(0,1) : this.state.PastMeetupsDetail.name}</Avatar>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant="subtitle1">
                                {this.state.PastMeetupsDetail.birth_year}
                                <br/>
                                {this.state.PastMeetupsDetail.name}
                                <br/>
                                {this.state.PastMeetupsDetail.mass}
                                <br/>
                                {this.state.PastMeetupsDetail.gender}
                                <br/>
                                {this.state.PastMeetupsDetail.height}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Profile)