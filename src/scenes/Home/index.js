import React, { Fragment } from 'react'

import MeetupDetail from './components/MeetupDetail';
import NextMeetup from './components/NextMeetup';
import AboutMeetup from './components/AboutMeetup';
import MemberList from './components/MemberList';
import PastMeetups from './components/PastMeetups';

const Home = (props) => { //stateless
    return(
        <Fragment>
            <MeetupDetail />
            <NextMeetup />
            <AboutMeetup />
            <MemberList />
            <PastMeetups />
        </Fragment>
    )
}

export default Home