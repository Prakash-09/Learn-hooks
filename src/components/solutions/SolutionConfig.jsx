import React, { useState, useContext } from 'react';
import { Row, Col } from 'reactstrap';
import { Button } from 'react-bootstrap';
import solutionConfigJson from './SolutionConfigJson';
import { FormConfig } from './SolutionOptions';
import Define from './Define';
import Configure from './Configure';
import Deploy from './Deploy';
import Preview from './Preview';

export const FormConfigContext = React.createContext()

export default function SolutionConfig() {
    const configValues = useContext(FormConfig)
    const [formConfigValues, setFormConfigValues] = useState(configValues.formConfig)
    const [formFields] = useState(solutionConfigJson.DATA_INPUT_FORM)
    const [isPreview, setIsPreview] = useState(false)
    const [currentStep, setCurrentStep] = useState(Object.keys(solutionConfigJson.DATA_INPUT_FORM.design.layout)[0])


    const handleValues = (field, child, name, val) => {
        if (field.type !== "group") {
            setFormConfigValues({ ...formConfigValues, [field.key]: val })
        }

        if (field.type === "group") {
            let test = (formConfigValues[field.key][child.key] = val)

            setFormConfigValues({ ...formConfigValues, test })
        }
    }

    const handleButtonClick = (type, step) => {
        let formTabNamesList = Object.keys(formFields.design.layout)
        let currentIndexValue = formTabNamesList.indexOf(currentStep)

        if (type === "NEXT") {
            if (formTabNamesList.length === currentIndexValue + 1) {
                if (formFields.design.preview) {
                    setCurrentStep("PREVIEW")
                    setIsPreview(true)
                } else {
                    console.log("Form submitted")
                }
            } else {
                if (currentStep === "PREVIEW") {
                    console.log("Form submitted")
                } else {
                    setCurrentStep(step)
                }
            }
        } else {
            if (currentStep === "PREVIEW") {
                setCurrentStep(step)
            }
            setCurrentStep(step)
        }
    }

    let formTabNames = Object.keys(formFields.design.layout)
    let currentIndex = formTabNames.indexOf(currentStep)
    let formTabs = formTabNames.map(tab => {
        return {
            label: tab.slice(0, 1).toUpperCase() + tab.slice(1).toLowerCase(),
            key: tab
        }
    })

    return (
        <div>
            {console.log("formConfigValues", formConfigValues)}
            <Row className="m-0">
                <Col xs="3" md="3" className="p-0 form-tabs-conatainer">
                    {formTabs.map((tab, tabIdx) =>
                        <Row className="m-0" key={tabIdx}>
                            <Col className={`text-center tab-number mx-4 mt-3 ${currentStep === tab.key && 'selected-tab-number'}`} xs="auto">{tabIdx + 1}</Col>
                            <Col className="p-0 tab-label mt-4">{tab.label}</Col>
                        </Row>
                    )}
                    {formFields.design.preview &&
                        <Row className="m-0">
                            <Col className={`text-center tab-number mx-4 mt-3 ${currentStep === "PREVIEW" && 'selected-tab-number'}`} xs="auto">
                                {formTabs.length + 1}
                            </Col>
                            <Col className="p-0 tab-label mt-4">Preview</Col>
                        </Row>
                    }
                </Col>
                <Col xs="9" md="9" className="p-0 form-content-conatainer">
                    {formTabs.map((tab, tabIdx) =>
                        <div key={tabIdx} className="m-3">
                            {tab.key === currentStep &&
                                <div>
                                    <FormConfigContext.Provider value={{ formConfigValues: formConfigValues, handleValues: handleValues }} >
                                        {currentStep === "DEFINE" && currentStep !== "CONFIGURE" && currentStep !== "DEPLOY" &&
                                            <Define />
                                        }
                                        {currentStep !== "DEFINE" && currentStep === "CONFIGURE" && currentStep !== "DEPLOY" &&
                                            <Configure />
                                        }
                                        {currentStep !== "DEFINE" && currentStep !== "CONFIGURE" && currentStep === "DEPLOY" &&
                                            <Deploy />
                                        }
                                    </FormConfigContext.Provider>
                                </div>
                            }
                        </div>
                    )}
                    <FormConfigContext.Provider value={{formConfigValues: formConfigValues}}>
                        {currentStep !== "DEFINE" && currentStep !== "CONFIGURE" && currentStep !== "DEPLOY" && isPreview && currentStep === "PREVIEW" && formFields.design.preview &&
                            <Preview />
                        }
                    </FormConfigContext.Provider>
                    <Row className="m-0 button-container" xs="2">
                        <Col className="p-0 text-left">
                            {currentIndex !== 0 &&
                                <Button variant="warning" size="sm"
                                    onClick={() => handleButtonClick("PREV", currentStep === "PREVIEW" ? formTabNames[formTabNames.length - 1] : formTabNames[currentIndex - 1])}
                                >
                                    {currentStep === "PREVIEW" ?
                                        formTabNames[formTabNames.length - 1]
                                        : formTabNames[currentIndex - 1]
                                    }

                                </Button>
                            }
                        </Col>
                        <Col className="p-0 text-right">
                            <Button variant="primary" size="sm"
                                onClick={() => handleButtonClick("NEXT", formTabNames[currentIndex + 1])}
                            >
                                {currentStep === "PREVIEW" ? "CREATE" :
                                    formTabNames.length === currentIndex + 1 ?
                                    formFields.design.preview ?
                                        "PREVIEW"
                                        :
                                        "CREATE"
                                    : formTabNames[currentIndex + 1]
                                }
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}