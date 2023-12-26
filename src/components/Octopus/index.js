import React, {useState} from 'react';

function Octopus (props) {
       const [mood, setMood] = useState('sad');

   const clickHandler = () => {
        setMood(mood === 'sad' ? 'happy' : 'sad');
    }
    
        const url =  mood === 'sad' ? '/images/2.jpeg' : '/images/1.jpeg';
        return (
            <section onClick={clickHandler}>
                <img src={url} />
            </section>
           
        );
}

export default Octopus;


// Таска: переписати компоненту на функціональну + хук useState