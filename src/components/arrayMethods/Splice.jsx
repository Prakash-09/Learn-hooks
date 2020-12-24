import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import ArrayJson from './rootComponent/ArrayJson';

export default class Splice extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ArrayJson.LIST,
            storeSplice: [],
        }
    }

    handleSlice = () => {
        const storeSplice = this.state.data.splice(2, 1, { id: '999', label: 'Canada', key: "canada", peoples: 233 })
        this.setState({ storeSplice: storeSplice })
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
                    <Col className="text-center"><Button variant="primary" size="sm" onClick={this.handleSlice}>Splice</Button></Col>
                    <Col className="text-center">
                        {this.state.storeSplice.map((item, itemIdx) =>
                            <div key={itemIdx}>
                                {item.key}
                            </div>
                        )}
                    </Col>
                </Row>
            </div>
        );
    }
}