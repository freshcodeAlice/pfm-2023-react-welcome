import React, { Component } from 'react';
import Spinner from '../Spinner';

class UserLoader extends Component {
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
      return this.props.children(this.state)
    }
}

export default UserLoader;
