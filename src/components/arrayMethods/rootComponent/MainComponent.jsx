import React from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import Filter from '../Filter';
import Reduce from '../Reduce';
import Slice from '../Slice';
import Splice from '../Splice';
import Sort from '../Sort';
import Concat from '../Concat';
import Fill from '../Fill';
import Join from '../Join';
import IndexOf from '../IndexOf';
import Includes from '../Includes';

const ARRAY_METHOD_COMPONENTS = [
    { id: 1, label: "Filter", component: <Filter /> },
    { id: 2, label: "Reduce", component: <Reduce /> },
    { id: 3, label: "Slice", component: <Slice /> },
    { id: 4, label: "Splice", component: <Splice /> },
    { id: 5, label: "Sort", component: <Sort /> },
    { id: 6, label: "Concat", component: <Concat /> },
    { id: 7, label: "Fill", component: <Fill /> },
    { id: 8, label: "Join", component: <Join /> },
    { id: 9, label: "IndexOf", component: <IndexOf /> },
    { id: 10, label: "Includes", component: <Includes /> },
]

export default class MainComponent extends React.Component {
    render() {
        return (
            <div className="m-3">
                <Row xs="1" md="2" className="m-0">
                    {ARRAY_METHOD_COMPONENTS.map((cmpnt, cmpntIdx) =>
                        <Col key={cmpntIdx} className="p-0">
                            <Card className="m-1">
                                <CardHeader className="font-weight-bold">{cmpnt.label}</CardHeader>
                                <CardBody>
                                    {cmpnt.component}
                                </CardBody>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
        );
    }
}