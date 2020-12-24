import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import ArrayJson from './rootComponent/ArrayJson';

export default class Sort extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ArrayJson.LIST,
            additionalData: [
                { id: '11000011', label: 'Brazil', key: "brazil", peoples: 281 },
                { id: '11000022', label: 'Portugal', key: "portugal", peoples: 231 },
            ],
            storeConcat: [],
        }
    }

    handleConcat = () => {
        
        const storeConcat = this.state.data.concat(this.state.additionalData)
        this.setState({ storeConcat: storeConcat })
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
                    <Col className="text-center">
                        {this.state.additionalData.map((item, itemIdx) =>
                            <div key={itemIdx}>
                                {item.label}
                            </div>
                        )}
                    </Col>
                    <Col className="text-center"><Button variant="primary" size="sm" onClick={this.handleConcat}>Concat</Button></Col>
                    <Col className="text-center">
                        {this.state.storeConcat.map((item, itemIdx) =>
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