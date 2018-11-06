import {createStore, combineReducers, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import memberReducer from '../reducers/member';
import appReducer from '../reducers/app';
import pastMeetupReducer from '../reducers/passmeetup'

const reducers = combineReducers({
    members: memberReducer,
    apps: appReducer,
    pastmeetups: pastMeetupReducer
})

const middleware = applyMiddleware(logger, thunk)

export default createStore (reducers, middleware)