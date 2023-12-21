import React from "react";
import ThemeContext from "../contexts/ThemeContext";



/* Компонента вищого порядку (High order component) */

const withTheme = (Component) => (props) =>
    <ThemeContext.Consumer>
        {([theme, setTheme]) =>
            <Component
                theme={theme}
                changeTheme={setTheme}
                {...props} />}
    </ThemeContext.Consumer>

export default withTheme