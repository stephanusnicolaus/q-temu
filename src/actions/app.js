export const changePageTitle = (newPageTitle) => {
    return {
        type: 'PAGE_TITLE_CHANGE',
        payload: {
            newPageTitle: newPageTitle
        }
    }
}

export const changePageCopyRight = (newCopyRight) => {
    return {
        type: 'COPYRIGHT_CHANGE',
        payload: {
            newCopyRight: newCopyRight
        }
    }
}