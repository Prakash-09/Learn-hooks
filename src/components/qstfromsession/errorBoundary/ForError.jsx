import React from 'react';
import {Button} from 'react-bootstrap';

export default class ForError extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }
    render(){
        if(this.state.count === 3){
            throw new Error('I am getting Crashed')
        }
        return(
            <div className="text-center mt-3">
                <Button className="px-3" variant="primary" size="sm" onClick={() => this.setState({count: this.state.count + 1})}>{this.state.count}</Button>
            </div>
        );
    }
}