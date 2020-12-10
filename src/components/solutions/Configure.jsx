import React, { useState, useContext } from 'react';
import { inputField } from '../utils/Utils';
import { Row, Col } from 'reactstrap';
import solutionConfigJson from './SolutionConfigJson';
import './SolutionStyles.css';
import {FormConfigContext} from './SolutionConfig';

export default function Configure(props) {
    const [solFormFields] = useState(solutionConfigJson.DATA_INPUT_FORM.design.layout.CONFIGURE)
    const formConfig = useContext(FormConfigContext)

    const handleChangeFields = (field, child, name, val) => {
        formConfig.handleValues(field, child, name, val)
    }

    return (
        <div>
            {solFormFields.map((field, fieldIdx) =>
                <div key={fieldIdx}>
                    {field.type !== "group" &&
                        <Row className="m-0">
                            <Col className="p-0">
                                {inputField(field.type, field.key, field.label, formConfig.formConfigValues[field.key], (name, val) => handleChangeFields(field, "", name, val) , { input: 'input-field-select' }, field.options, field.id)}
                            </Col>
                        </Row>}
                    {field.type === "group" && <h5 className="mb-0 ">{field.label}</h5>}
                    {field.type === "group" &&
                        field.children.map((child, childIdx) =>
                            <Row className="m-0" key={childIdx}>
                                <Col className="p-0">
                                    {inputField(child.type, child.key, child.label, formConfig.formConfigValues[field.key][child.key], (name, val) => handleChangeFields(field, child, name, val), {input: ` ${child.type === 'checkbox' ? "mr-1" : "input-field-select"}`}, child.options, child.id)}
                                </Col>
                            </Row>
                        )
                    }
                </div>
            )}
        </div>
    );
}