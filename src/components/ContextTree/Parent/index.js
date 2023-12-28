import React, {PureComponent} from 'react';
import SubParent from './SubParent';

class Parent extends React.PureComponent {

    render() {
    console.log('Parent rerender')
    return (
        <div style={{border: 'inherit', padding: '25px'}}>
            Parent
            <SubParent />
        </div>
    );
}
}

export default Parent;
