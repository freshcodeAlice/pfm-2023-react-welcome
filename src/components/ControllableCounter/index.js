import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';

class ControllableCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        // nextProps, nextState - нові дані, які приходять і на їхній основі ми визначаємо, чи потребує компонента оновлення
        // this.props, this.state - поточні пропси і стейти, які актуальні до оновлення
        // return true - компонента оновлюється
        // return false - компонента не оновлюється

        if ((nextProps.step !== this.props.step) || (nextState.count === this.state.count)) {
            return false
        }
        return true
    }

    /*
    PureComponent - різновид React.Component, який базується на ідеї детермінованості (за одних і тих самих вхідних даних отримуємо один і той самий результат). За одних і тих самих пропсах або стейтах ми не перерендерюємо компоненту.

    PureComponent сам реалізує shouldComponentUpdate (тобто ви самі його реалізувати тут не можете)
    він поверхнево порівнює пропси та стейти і запускає оновлення тільки тоді, коли вони реально помінялись

    PureComponent порівнює стейти і пропси ПОВЕРХНЕВО
    у випадку:

    const prevState = {
        engine: {
            volume: {
                scale: 'l',
                value: 20
            }
        }  
    }

        const nextState = {
        engine: {
            volume: {
                scale: 'l',
                value: 20
            }
        }
    }

    При глибокій вкладеності стейту або пропсів PureComponent не зможе оптимізувати пере-рендер, бо порівнює за посиланнями вкладені об'єкти


    Використання PureComponent має сенс, коли виконується дві умови:
    1. Пропси і стейти - не вкладені об'єкти (не мають глибокої вкладеності)
    2. У рендері компоненти беруть участь ВСІ стейти і пропси
    */


    increment = () => {
        // this.setState({
        //     count: this.state.count + 1
        // })
        this.setState((state, props) => {
            const newState = {
                count: state.count + props.step
            };

            return newState
        })
    }

    decrement = () => {
        this.setState((state, props) => {
            const newState = {
                count: state.count - props.step
            };

            return newState
        })
    }

    change = () => {
        this.setState({
            count: this.state.count
        })
    }
    
    render() {
        console.log('child re-render')
        return (
            <div>
                <h1>count: {this.state.count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>

                <button onClick={this.change}>Re-render</button>
            </div>
        );
    }
}


ControllableCounter.propTypes = {
    step: PropTypes.number
}

ControllableCounter.defaultProps = {
    step: 5
}

export default ControllableCounter;
