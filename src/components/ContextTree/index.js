import React, { useContext } from 'react';
import Parent from './Parent';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './ContextTree.module.css';
import cx from 'classnames';
import CONSTANTS from '../../constants';

const { THEMES } = CONSTANTS;


function ContextTree(props) {
    const [theme, changeTheme] = useContext(ThemeContext);

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
}


export default ContextTree

// Переписати компоненти UserMenu, innerChild на useContext
