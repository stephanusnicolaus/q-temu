const initState = {
    pastMeetupData: [],
    memberTotal: 0
}

const pastMeetupReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_PAST_MEETUPS':
            return {
                ...state,
                pastMeetupData: action.payload.pastmeetups
            }
        default:
            return state
    }
}

export default pastMeetupReducer