import axios from 'axios'

export const fetchPastMeetups = () => {
    return (dispatch) => {
        axios.get('https://swapi.co/api/films')
        .then(response => {
            const pastmeetups = response.data.results

            dispatch({
                type: 'ADD_PAST_MEETUPS',
                payload:{
                    pastmeetups:pastmeetups
                }
            })
        })
    }
}