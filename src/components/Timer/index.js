import React, { useState, useEffect } from 'react';
import {format, addSeconds} from 'date-fns';

function Timer (props) {
    const [time, setTime] = useState( new Date(0,0,0,0,0,0,0,0));
    const [isRunning, setRunning] = useState( false);           
    let intervalId = null;



    useEffect(() => {
        start()
        return stop;
    }, [])
    
   const start = () => {
        if (!isRunning) {
            intervalId = setInterval(() => {
                setTime(addSeconds(time, 1));
                setRunning(true);
            }, 1000);
        }

    }

    const stop = () => {
        clearInterval(intervalId);
        intervalId = null;
        setRunning(false);
    }


    const restart = () => {
        setTime(new Date(0,0,0,0,0,0,0,0))
    }

    /// Зробити одну кнопку, на якій відображається "Start", якщо таймер зупинений або "Stop" якщо він іде
 

        const callback = isRunning ? stop : start;
        const textButton = isRunning ? 'Stop' : 'Start';
        return (
            <article>
                <h1>{format(time, 'HH:mm:ss')}</h1>
                {/* <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button> */}
                <button onClick={callback}>{textButton}</button>
                <button onClick={restart}>Restart</button>
            </article>
        );

}

export default Timer;


/*
Оновлення стану (setState) - це скоріше прохання до реакту оновити стан компоненти



*/

/*
Таска HW №2: переписати на хуки компоненту Timer

*/