import React from 'react';
import { Button } from 'react-bootstrap';

export default class ClassMouse extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            x: 0,
            y: 0,
            s: 0,
            p: 0
        }
    }

    mousePos = (e) => {
        // console.log("Mouse pos")
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }
    componentDidMount() {
        // console.log("Component Did Mount")
        window.addEventListener('mousemove', this.mousePos)
    }
    componentWillUnmount() {
        // console.log("Component will unmount")
        window.removeEventListener('mousemove', this.mousePos)
    }
    

    handleMouseCords = (e) => {
        this.setState({
            s: e.clientX,
            p: e.clientY
        })
    }
    render(){
        return(
            <div className="text-center">
                <h4>This is class component mouse position</h4>
                X: {this.state.x} Y: {this.state.y}
                <Button variant="primary" size="sm" onClick={this.handleMouseCords}>Get mouse cords</Button>
                X: {this.state.s} Y: {this.state.p}
            </div>
        );
    }
}