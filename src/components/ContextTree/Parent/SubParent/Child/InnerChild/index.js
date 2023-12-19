import React from 'react';
import ContextObj from '../../../../../../context';

const InnerChild = (props) => {
    console.log('InnerChild re-render')
    return (
        <ContextObj.Consumer>
            {(contextValue) => {
                console.log('внутрішня функція-дитина, яка керує рендером компоненти')
                return (
                    <div style={{ border: '3px solid black', padding: '25px' }}>
                        InnerChild
                        <p>
                         {contextValue.user?.firstName} {contextValue.user?.lastName}
                        </p>
                    </div>
                )
            }}
        </ContextObj.Consumer>
    );
}

export default InnerChild;
