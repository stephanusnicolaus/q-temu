const initState = {
    pageTitle: 'Qtemuan',
    copyRight: 2018
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case 'PAGE_TITLE_CHANGE':
            return{
                ...state,
                pageTitle: action.payload.newPageTitle
            }
        case 'COPYRIGHT_CHANGE':
            return{
                ...state,
                copyRight: action.payload.newCopyRight
            }
        default:
            return state
    }
}

export default appReducer