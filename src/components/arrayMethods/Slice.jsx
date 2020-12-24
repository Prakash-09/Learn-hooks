import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import ArrayJson from './rootComponent/ArrayJson';

export default class Slice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ArrayJson.LIST,
            storeSlice: [],
        }
    }

    handleSlice = () => {
        const storeSlice = this.state.data.map((item, itemIdx) =>{
            return item.key.slice(0,1).toUpperCase() + item.key.slice(1)
            
        })
        
        this.setState({storeSlice: storeSlice})
    }

    render() {
        return (
            <div>
                <Row>
                    <Col className="text-center">
                        {this.state.data.map((item, itemIdx) =>
                            <div key={itemIdx}>
                                {item.key}
                            </div>
                        )}
                    </Col>
                    <Col className="text-center"><Button variant="primary" size="sm" onClick={this.handleSlice}>Slice</Button></Col>
                    <Col className="text-center">
                        {this.state.storeSlice.map((item, itemIdx) => 
                            <div key={itemIdx}>
                                {item}
                            </div>
                        )}
                    </Col>
                </Row>
            </div>
        );
    }
}