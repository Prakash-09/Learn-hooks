import React, {useState, useContext} from 'react';
import { inputField } from '../utils/Utils';
import { Row, Col } from 'reactstrap';
import solutionConfigJson from './SolutionConfigJson';
import {FormConfigContext} from './SolutionConfig';
import './SolutionStyles.css';

export default function Deploy() {
    const [solFormFields] = useState(solutionConfigJson.DATA_INPUT_FORM.design.layout.DEPLOY)
    const formConfig = useContext(FormConfigContext)

    const handleChangeFields = (field, child, name, val) => {
        formConfig.handleValues(field, child, name, val)
    }
    return(
        <div>
            {solFormFields.map((field, fieldIdx) => 
                <Row className="m-0" key={fieldIdx}>
                    <Col className="p-0">
                        {inputField(field.type, field.key, field.label, formConfig.formConfigValues[field.key], (name, val) => handleChangeFields(field, "", name, val), 
                        {input: `${field.type === 'checkbox' ? 'mr-1' : 'input-field-select' }`}, field.options, field.id)}
                    </Col>
                </Row>
            )}
        </div>
    );
}