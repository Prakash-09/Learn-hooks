import React from 'react';
import {Button} from 'react-bootstrap';

export default class ClassTimer extends React.Component{

    interval
    constructor(props){
        super(props);

        this.state = {
            timer: 0
        }
    }
    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({timer: this.state.timer + 1})
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render(){
        return(
            <div className="text-center m-2">
                Class timer - {this.state.timer}
                <Button variant="primary" size="sm" onClick={() => clearInterval(this.interval) } className="ml-3">Clear</Button>
            </div>
        );
    }
}