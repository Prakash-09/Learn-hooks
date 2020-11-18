import React, {useState} from 'react';
import { Row, Col } from 'reactstrap';
import hooksFormFieldsJson from './HooksFormFieldsJson';

export default function HooksFormFields() {
    const [properties, setProperties] = useState({name: '', age: '', gender: ''})

    const handleChange = (e, key) => {
        // properties[key] = e.target.value
        // let props = properties
        // props[key] = e.target.value
        // setProperties(props)
        setProperties({...properties, [key] : e.target.value})
    }
    return(
        <div className="text-center mt-3">
            {hooksFormFieldsJson.FIELDS.map((item, itemIdx) => 
                <div key={itemIdx} className="m-2">
                    <Row>
                        <Col className="text-center">
                            {item.type !== 'select' && <span className="font-weight-bolder">{item.label}</span>}
                            {item.type === 'select' && <span className="font-weight-bolder">{item.label}</span>}
                        </Col>
                        <Col className="text-left">
                            {item.type !== 'select' &&
                                <input type={item.type} key={item.key} id={item.id} value={properties[item.key]} onChange={(e) => handleChange(e, item.key)} />
                            }
                            {item.type === 'select' && 
                                <select name={item.key} id={item.id} onChange={(e) => handleChange(e, item.key)}>
                                    {item.options.map((ite, iteIdx) => 
                                        <option key={iteIdx}>{ite.value}</option>    
                                    )}
                                </select>
                            }
                        </Col>
                    </Row>
                </div>
            )}
        </div>
    );
}