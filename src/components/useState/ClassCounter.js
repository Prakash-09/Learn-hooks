import React from 'react';
import { Button } from 'react-bootstrap';

export default class ClassCounter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            counter: 0
        }
    }

    handleCounter = () => {
        this.setState({ counter: this.state.counter + 1 })
    }
    render(){
        const { counter } = this.state;
        return(
            <div className="text-center mt-3">
                <Button variant="primary" size="sm" onClick={this.handleCounter}> Count {counter} </Button>
            </div>
        );
    }
}