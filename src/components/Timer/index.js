import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.intervalId = null;
    }

    componentDidMount() {
        this.start();
    }
    
    start = () => {
        if (!this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState({
                    count: this.state.count + 1
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
            count: 0
        })
    }

    render() {
        return (
            <article>
                <h1>{this.state.count}</h1>
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