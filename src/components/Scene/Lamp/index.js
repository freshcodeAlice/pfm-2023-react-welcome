import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        this.props.callback()
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

Lamp.propTypes = {
    lightState: PropTypes.bool.isRequired,
    callback: PropTypes.func
}

Lamp.defaultProps = {
    callback: () => {}
}

export default Lamp;


/// ЗМІШУВАТИ ПРОПСИ І СТАН (наприклад, засновувати стан на пропсах - це ПОГАНИЙ КОД)