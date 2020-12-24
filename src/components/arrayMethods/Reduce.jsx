import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';

export default class Reduce extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [7, 3, 5, 2, 1],
            storeReduce: '',
        }
    }

    handleReduce = () => {
        
        const sum = (accumulator, val) => {
            return accumulator + val
        }
        const storeReduce = this.state.data.reduce(sum, 0)
        this.setState({storeReduce: storeReduce})
    }

    render() {
        return (
            <div>
                <Row>
                    <Col className="text-center">
                        {this.state.data.map((item, itemIdx) =>
                            <div key={itemIdx}>
                                {item}
                            </div>
                        )}
                    </Col>
                    <Col className="text-center"><Button variant="primary" size="sm" onClick={this.handleReduce}>Reduce</Button></Col>
                    <Col className="text-center">
                        {this.state.storeReduce}
                    </Col>
                </Row>
            </div>
        );
    }
}