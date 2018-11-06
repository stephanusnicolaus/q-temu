import React from 'react'

class Joined extends React.Component {
    componentWillMount() {
        console.log('Akan Lahir')
    }
    
    componentWillUnmount(){
        console.log('Mati')
    }

    componentDidMount() {
        console.log('Sudah Lahir')
    }
    
    render(){
        console.log('Lahir')
        return(
            "Joined"
        )
    }
}
export default Joined
