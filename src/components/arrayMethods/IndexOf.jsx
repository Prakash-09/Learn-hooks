import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import ArrayJson from './rootComponent/ArrayJson';

export default class IndexOf extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ArrayJson.LIST,
            storeIndexOf:'',
        }
    }

    handleJoin = () => {
        const storeIndexOf = this.state.data.map((item, itemaIdx, itemArr) => {
            return itemArr.indexOf(item)
        })
        this.setState({storeIndexOf: storeIndexOf})
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
                    <Col className="text-center"><Button variant="primary" size="sm" onClick={this.handleJoin}>IndexOf</Button></Col>
                    <Col className="text-center">
                        {this.state.storeIndexOf}
                    </Col>
                </Row>
            </div>
        );
    }
}