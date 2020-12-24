import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import ArrayJson from './rootComponent/ArrayJson';

export default class Fill extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ArrayJson.LIST,
            storeFill: [],
        }
    }

    handleConcat = () => {
        const storeFill = this.state.data.fill({ id: '11000011', label: 'Brazil', key: "brazil", peoples: 281 }, 1, 2)
        this.setState({storeFill: storeFill})
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
                    <Col className="text-center"><Button variant="primary" size="sm" onClick={this.handleConcat}>Fill</Button></Col>
                    <Col className="text-center">
                        {this.state.storeFill.map((item, itemIdx) =>
                            <div key={itemIdx}>
                                {item.label}
                            </div>
                        )}
                    </Col>
                </Row>
            </div>
        );
    }
}