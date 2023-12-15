import React from 'react';
import List from '../../components/List';


class ListPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: ['item1', 'item2', 'item3']
        }
    }
    
    render() {
        const listArray = this.state.listItems.map((item,index) => <li key={index}>{item}</li>)
        return (
            <div>
                <List heading="My super title">
                    {listArray}
                </List>
                {/* React.createElement(type, {heading: 'My super title'}, ) */}
            </div>
        );
    }
}

export default ListPage;
