import React from 'react';
import PropTypes from 'prop-types';

const FlexContainer = (props) => {
    const {children, fd, jc, ai} = props;

    const styles = {
        display: 'flex',
        flexDirection: fd,
        justifyContent: jc,
        alignItems: ai
    }

    return (
        <div style={styles}>
        {children} 
        </div>
    );
}

export default FlexContainer;


FlexContainer.propTypes = {
    fd: PropTypes.string,
    jc: PropTypes.string,
    ai: PropTypes.string,
    children: PropTypes.object
}

FlexContainer.defaultProps = {
    fd: 'row',
    jc: 'flex-start',
    ai: 'stretch'
}

/*
Створити компоненту флекс-контейнер, який буде відображати передані йому елементи (будь-яку кількість)
Продумати, як прописати компоненту так, щоби налаштування розташування дітей вона приймала ззовні
(flex-direction, justify-content, align-items)

Прописати propTypes, defaultProps


*/