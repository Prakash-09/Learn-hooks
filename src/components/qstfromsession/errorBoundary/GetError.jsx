import React from 'react';

export default class GetError extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            test: null
        }
    }
    render(){
        if(this.state.test === null){
            throw new Error('I am getting Crashed')
        }
        return(
            <div>{this.state.test.toString()}</div>
        );
    }
}