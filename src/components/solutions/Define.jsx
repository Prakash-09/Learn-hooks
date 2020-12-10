import React, {useState, useContext} from 'react';
import { inputField } from '../utils/Utils';
import { Row, Col } from 'reactstrap';
import solutionConfigJson from './SolutionConfigJson';
import {FormConfigContext} from './SolutionConfig';

export default function Define(props) {
    const [solFormFields] = useState(solutionConfigJson.DATA_INPUT_FORM.design.layout.DEFINE)
    const formConfig = useContext(FormConfigContext)

    const handleChangeFields = (field, child, name, val) => {
        formConfig.handleValues(field, child, name, val)
    }
    return(
        <div>
            {solFormFields.map((field, fieldIdx) => 
                <Row className="m-0" key={fieldIdx}>
                    <Col className="p-0">
                        {inputField(field.type, field.key, field.label, formConfig.formConfigValues[field.key], (name, val) => handleChangeFields(field, "", name, val), {}, {}, field.id)}
                    </Col>
                </Row>
            )}
        </div>
    );
}