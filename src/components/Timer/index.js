import React, { Component } from 'react';
import {format, addSeconds} from 'date-fns';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(0,0,0,0,0,0,0,0)
        }
        this.intervalId = null;
    }

    componentDidMount() {
 //       this.start();
    }
    
    start = () => {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {

                // const newDate = new Date(this.state.time.getTime());
                // newDate.setSeconds(this.state.time.getSeconds() + 1)

                this.setState({
                    time: addSeconds(this.state.time, 1)
                })
            }, 1000);
        }

    }
    // відрефакторити і не допустити навішування декількох інтеврвалів


    stop = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    componentWillUnmount() {
        this.stop();
    }

    restart = () => {

        this.setState({
            time: new Date(0,0,0,0,0,0,0,0)
        })
    }

    render() {
        return (
            <article>
                <h1>{format(this.state.time, 'HH:mm:ss')}</h1>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.restart}>Restart</button>
            </article>
        );
    }
}

export default Timer;


/*
Оновлення стану (setState) - це скоріше прохання до реакту оновити стан компоненти



*/