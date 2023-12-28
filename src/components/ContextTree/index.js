import React, { useContext, useState, useEffect, useCallback, useMemo } from 'react';
import Parent from './Parent';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './ContextTree.module.css';
import cx from 'classnames';
import CONSTANTS from '../../constants';

const { THEMES } = CONSTANTS;


function ContextTree(props) {
    const [value, setValue] = useState('');
    const [theme, changeTheme] = useContext(ThemeContext);


    // const logValue = () => {console.log(value)}

    const memoizedLogValue = useCallback(() => {console.log(value)}, [value]);

    useEffect( () => {
        console.log('функція logValue була перестворена заново')
    }, [memoizedLogValue])

    // const cnames = cx({
    //     [styles.lightTheme]: theme === THEMES.LIGHT,
    //     [styles.darkTheme]: theme === THEMES.DARK
    // });
    
    const memoClasses = useMemo(() => {
       return cx({
            [styles.lightTheme]: theme === THEMES.LIGHT,
            [styles.darkTheme]: theme === THEMES.DARK
            });
    }, [theme])

    const changeHandler = ({target: {value}}) => {
        setValue(value);
    }


    return (
        <div className={memoClasses}>
            <input type="text" name="value" value={value} onChange={changeHandler}/>
            <button onClick={memoizedLogValue}>Click to log value</button>
            ContextTree
            <button onClick={changeTheme}>ChangeTheme</button>
            <Parent />
        </div>
    )
}


export default ContextTree

// Переписати компоненти UserMenu, innerChild на useContext
