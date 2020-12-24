import React from 'react';
import { Button } from 'react-bootstrap';
import { Row, Col } from 'reactstrap';

export default class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: ["Sai", "Prakash", "Ketha", "Sai", "Ketha"],
            dataFilter: [],
        }
    }

    handleDuplicates = () => {
        const storeFilteredData = this.state.data.filter((item, itemIdx, itemArr) => {
            // console.log( itemArr, itemArr.indexOf(item))
            return itemArr.indexOf(item) === itemIdx
        })
        this.setState({ dataFilter: storeFilteredData })
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
                    <Col className="text-center"><Button variant="primary" size="sm" onClick={this.handleDuplicates}>Remove Duplicates</Button></Col>
                    <Col className="text-center">
                        {this.state.dataFilter.map((item, itemIdx) =>
                            <div key={itemIdx}>{item}</div>
                        )}
                    </Col>
                </Row>
            </div>
        );
    }
}