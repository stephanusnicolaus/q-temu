import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      margin: ['0 auto']
    }
};

let Footer = (props) => {
    const { classes, appState } = props;
    return(
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="body2" color="inherit" className={classes.grow}>
                        Copyright Hactiv8 - {appState.copyRight}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        appState: state.apps
    }
}

Footer = connect(mapStateToProps)(Footer)
Footer = withStyles(styles)(Footer)

export default withStyles(styles)(Footer);