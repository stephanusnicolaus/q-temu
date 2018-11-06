import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: 30
    }
};

let Header = (props) => {
    const { classes, appState } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        <Link to='/'>
                        { appState.pageTitle}
                        </Link>
                        <Button color="inherit" className={classes.menuButton}>Explore</Button>
                        <Button color="inherit">Create Meetup</Button>
                        <Link to='/about'>
                            <Button color="inherit">About QTemu</Button>
                        </Link>
                    </Typography>
                    <Button color="inherit">Login</Button>
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

Header = connect(mapStateToProps)(Header)
Header = withStyles(styles)(Header)

export default Header;