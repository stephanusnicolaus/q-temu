const initState = {
    memberData: [],
    memberTotal: 0
}

const memberReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_MEMBERS':
            return {
                ...state,
                memberData: action.payload.members
            }
        default:
            return state
    }
}

export default memberReducer