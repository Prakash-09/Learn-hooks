import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import ArrayJson from './rootComponent/ArrayJson';

export default class Includes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ArrayJson.LIST,
            storeIncludes: false,
        }
    }

    handleJoin = () => {
        const storeIncludes = this.state.data.map((item, itemaIdx, itemArr) => {
            return itemArr.includes("{id: '7', label: 'Japan', key: 'japan', peoples: 281}")
        })
        this.setState({storeIncludes: storeIncludes})
    }

    render() {
        return (
            <div>
                <Row>
                    <Col className="text-center">
                        {this.state.data.map((item, itemIdx) =>
                            <div key={itemIdx}>
                                {item.label}
                            </div>
                        )}
                    </Col>
                    <Col className="text-center"><Button variant="primary" size="sm" onClick={this.handleJoin}>Includes</Button></Col>
                    <Col className="text-center">
                        {this.state.storeIncludes ? "True": "False"}
                    </Col>
                </Row>
            </div>
        );
    }
}