import React, { Component } from 'react';
import {format, addSeconds} from 'date-fns';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(0,0,0,0,0,0,0,0),
            isRunning: false
        }
        this.intervalId = null;
    }

    componentDidMount() {
 //       this.start();
    }
    
    start = () => {
        if (!this.state.isRunning) {
            this.intervalId = setInterval(() => {

                // const newDate = new Date(this.state.time.getTime());
                // newDate.setSeconds(this.state.time.getSeconds() + 1)

                this.setState({
                    time: addSeconds(this.state.time, 1),
                    isRunning: true
                })
            }, 1000);
        }

    }
    // відрефакторити і не допустити навішування декількох інтеврвалів


    stop = () => {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.setState({
            isRunning: false
        })
    }

    componentWillUnmount() {
        this.stop();
    }

    restart = () => {

        this.setState({
            time: new Date(0,0,0,0,0,0,0,0)
        })
    }

    /// Зробити одну кнопку, на якій відображається "Start", якщо таймер зупинений або "Stop" якщо він іде
 
    render() {
        const callback = this.state.isRunning ? this.stop : this.start;
        const textButton = this.state.isRunning ? 'Stop' : 'Start';
        return (
            <article>
                <h1>{format(this.state.time, 'HH:mm:ss')}</h1>
                {/* <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button> */}
                <button onClick={callback}>{textButton}</button>
                <button onClick={this.restart}>Restart</button>
            </article>
        );
    }
}

export default Timer;


/*
Оновлення стану (setState) - це скоріше прохання до реакту оновити стан компоненти



*/