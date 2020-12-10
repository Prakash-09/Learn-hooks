import React, { useState, useContext } from 'react';
import solutionConfigJson from './SolutionConfigJson';
import { FormConfigContext } from './SolutionConfig';
import { Row, Col } from 'reactstrap';

export default function Preview() {
    const [formFields] = useState(solutionConfigJson.DATA_INPUT_FORM)
    const formConfig = useContext(FormConfigContext)
    return (
        <div>
            {Object.keys(formFields.design.layout).map((tab, tabIdx) =>
                <Row className="m-0" xs="1" md="2" key={tabIdx}>
                    {formFields.design.layout[tab].map((field, fieldIdx) =>
                        <Col className="p-0" key={fieldIdx}>
                            {field.type !== "group" &&
                                <Row key={fieldIdx} className="m-0" >
                                    <Col className="p-0 my-1 ml-2 text-truncate font-weight-bold" >
                                        {field.label} :
                                    </Col>
                                    <Col className="p-0 my-1 ml-2 text-truncate ">
                                        {field.type === "checkbox" ? formConfig.formConfigValues[field.key] === true ? "True" : "False"
                                           : formConfig.formConfigValues[field.key]
                                        }
                                    </Col>
                                </Row>
                            }{field.type === "group" &&
                                field.children.map((childField, childFieldIdx) =>
                                    <Row className="m-0" key={childFieldIdx}>
                                        <Col className="p-0  my-1 ml-2 text-truncate font-weight-bold">
                                            {childField.label} :
                                        </Col>
                                        <Col className=" my-1 ml-2 text-truncate">
                                            { childField.type === "checkbox" ? formConfig.formConfigValues[field.key][childField.key] === true ? "True" : "False"
                                                : formConfig.formConfigValues[field.key][childField.key]
                                            }
                                        </Col>
                                    </Row>
                                )}
                        </Col>
                    )}
                </Row>
            )}
        </div>
    );
}