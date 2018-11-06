// import React, { Component } from 'react';
// import logo from './logo.svg';
// import Title from './Title'

import React, { Component } from 'react';
import './App.css';
import Home from './scenes/Home';
import About from './scenes/About';
import Profile from './scenes/Profile';
// import axios from "axios";
import {  BrowserRouter as Router,  Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import myStore from './config/store'

import Footer from './templates/Footer';
import Header from './templates/Header';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

const myTheme = createMuiTheme({
  palette: {
    primary: red
  }
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      MemberListState: [],
      PastMeetupsState: []
    }
  }

  componentDidMount() {
    // axios
    //   .get("https://swapi.co/api/people")
    //   .then(response => (
    //     this.setState({ MemberListState: response.data.results })
    // ));
    
    // axios
    //   .get("https://swapi.co/api/films/")
    //   .then(response => (
    //     this.setState({ PastMeetupsState: response.data.results })
    // ));
  }

  render() {
    return (
      <Provider store={myStore}>
          <Router>  
            <MuiThemeProvider theme={myTheme}>
              <Header />
                <Route exact path="/" render={() => (
                  <Home/>
                )} />
                <Route path="/about" component={About} />
                <Route path="/profile/:id" component={Profile} />
              <Footer />
            </MuiThemeProvider>
          </Router>
      </Provider>
    );
  }
}

export default App;
