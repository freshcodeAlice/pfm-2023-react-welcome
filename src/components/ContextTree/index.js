import React from 'react';
import Parent from './Parent';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './ContextTree.module.css';
import cx from 'classnames';
import CONSTANTS from '../../constants';
const {THEMES} = CONSTANTS;

class ContextTree extends React.PureComponent {

    render() {
        console.log('ContextTree re-render')
        return (
            <ThemeContext.Consumer>
                {([theme, changeTheme]) => {
                    const cnames = cx({
                        [styles.lightTheme]: theme === THEMES.LIGHT,
                        [styles.darkTheme]: theme === THEMES.DARK
                    })
                    return (
                        <div className={cnames}>
                            ContextTree
                             <button onClick={changeTheme}>ChangeTheme</button>
                            <Parent />
                        </div>
                    )
                }}
            </ThemeContext.Consumer>
        );
    }
}

export default ContextTree;

/*
props-drilling (анти-паттерн) - поганий хід
Прокидування пропсів там, де воно не має сенсу

*/