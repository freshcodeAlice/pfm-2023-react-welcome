import React from 'react';
import './style.css';
import 'animate.css';

class Aloha extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            isGreeting: true
        }
    }
    
    clickHandler = () => {
        this.setState({
            isGreeting: !this.state.isGreeting
        })
    }

   
    render() {
        const hreetingText = this.state.isGreeting ? 'Hello' : 'Bye';
        return (<h2 
            className="red-big-text animate__animated animate__bounceIn"
            onClick={this.clickHandler}
            >
                {hreetingText}, {this.props.name}
                </h2>
        )
    }

}

export default Aloha;

