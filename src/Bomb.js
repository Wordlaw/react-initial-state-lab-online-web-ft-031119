import React from 'react';


class Bomb extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render(){
        let seconds = this.state.secondsLeft
        return(
            <div>
                { seconds ? `${seconds} seconds left before I go boom!` : "Boom!" }
            </div>
        )
    }

}

export default Bomb