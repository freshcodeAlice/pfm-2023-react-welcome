import React, { Component } from 'react';
import './style.css';

class Lamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // on: this.props.lightState - ТАК НЕ РОБИМО!
        }
    }

    getParentSomeInfo = () => {
        // в пропсах лежить адреса функції, яку треба викликати
        this.props.callback('hello from child')
    }
    

    render() {
//        const cnames = this.state.on ? 'lamp-on' : 'lamp-off';
        const cnames = this.props.lightState ? 'lamp-on' : 'lamp-off';
        return (
            <section>
            <div className={cnames}>
                
            </div>
            <button onClick={this.getParentSomeInfo}>switch</button>
            </section>
        );
    }
}

// function Lamp(props) {
//     const cn = props.lightState ? 'lamp-on' : 'lamp-off';
//     return (
//         <div className={cn}></div>
//     )
// }



export default Lamp;


/// ЗМІШУВАТИ ПРОПСИ І СТАН (наприклад, засновувати стан на пропсах - це ПОГАНИЙ КОД)