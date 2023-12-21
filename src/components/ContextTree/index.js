import React from 'react';
import Parent from './Parent';
import ThemeContext from '../../contexts/ThemeContext';
import styles from './ContextTree.module.css';
import cx from 'classnames';
import CONSTANTS from '../../constants';
import withTheme from '../../HOC/withTheme';
const { THEMES } = CONSTANTS;


class ContextTree extends React.PureComponent {

    render() {
        const cnames = cx({
            [styles.lightTheme]: this.props.theme === THEMES.LIGHT,
            [styles.darkTheme]: this.props.theme === THEMES.DARK
        }) 
        return (
            <div className={cnames}>
                ContextTree
                <button onClick={this.props.changeTheme}>ChangeTheme</button>
            
                <Parent />
            </div>
        )
    }
}





export default withTheme(ContextTree)

