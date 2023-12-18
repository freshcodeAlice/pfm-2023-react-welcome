import React, { Component } from 'react';

class PhoneLoader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            error: null,
            isFetching: true
        }
    }
    componentDidMount() {
        this.props.fetchCallback()
        .then(data => {
            this.setState({
                data
            })
        })
        .catch(error => {
            this.setState({
                error
            })
        })
        .finally(() => {
            this.setState({
                isFetching: false
            })
        })
    }
    
    render() {
        return (
            <ol>
                {this.state.phones.map(p => <li key={p.id}>{p.brand} - {p.model}</li>)}
            </ol>
        );
    }
}

export default PhoneLoader;
