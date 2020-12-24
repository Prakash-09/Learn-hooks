import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import ArrayJson from './rootComponent/ArrayJson';

export default class Sort extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ArrayJson.LIST,
            storeSort: [],
        }
    }

    handleSort = () => {
        const storeSort = this.state.data.map(item => {
            return item.label
        }).sort((a, b) => a.localeCompare(b))
        this.setState({ storeSort: storeSort })
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
                    <Col className="text-center"><Button variant="primary" size="sm" onClick={this.handleSort}>Sort</Button></Col>
                    <Col className="text-center">
                        {this.state.storeSort.map((item, itemIdx) =>
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