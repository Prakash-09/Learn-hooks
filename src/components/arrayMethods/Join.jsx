import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';
import ArrayJson from './rootComponent/ArrayJson';

export default class Join extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ArrayJson.LIST,
            storeJoin:'',
        }
    }

    handleJoin = () => {
        const storeJoin = this.state.data.map(item => {
            return item.label
        }).join("-")
        this.setState({storeJoin: storeJoin})
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
                    <Col className="text-center"><Button variant="primary" size="sm" onClick={this.handleJoin}>Join</Button></Col>
                    <Col className="text-center">
                        {this.state.storeJoin}
                    </Col>
                </Row>
            </div>
        );
    }
}