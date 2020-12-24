import React from 'react';


export default class ErrorBoundary extends React.Component{
    constructor(props) {
        super(props);

        this.state= {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        })
    }
    render(){
        console.log(this.state)
        if(this.state.error){
            return <h5>Am Error</h5>
        }else{
            return this.props.children;
        }
    }
}