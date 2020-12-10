import React, { useState } from 'react';
import solutionConfigJson from './SolutionConfigJson';
import './SolutionStyles.css';
import { Row, Col, Card, CardBody } from 'reactstrap';
import { Button } from 'react-bootstrap';
import SolutionConfig from './SolutionConfig';


export const FormConfig = React.createContext()

export default function SolutionOptions() {
    const dataOptions = JSON.parse(JSON.stringify(solutionConfigJson.DATA_OPTIONS))
    const [renderStep, setRenderStep] = useState(false)
    const [formConfig, setFormConfig] = useState({})
    const [selectionConfig, setSelectionConfig] = useState({
        mainNav: Object.keys(JSON.parse(JSON.stringify(solutionConfigJson.DATA_OPTIONS)))[0],
        selectedTab: "",
    })

    const handleCardClick = (solutionConfig) => {
        return (
            setRenderStep(true),
            setFormConfig(solutionConfig)
        )
    }

    const handleClose = () => {
        return (
            setRenderStep(false),
            setFormConfig({}),
            setSelectionConfig({
                mainNav: Object.keys(JSON.parse(JSON.stringify(solutionConfigJson.DATA_OPTIONS)))[0],
                selectedTab: "",
            })
        )
    }

    const RenderSelectedTab = () => {
        let options = dataOptions;
        let innerContent = options[selectionConfig.mainNav].innerContent
        const RenderInnerContent = () => {
            let { selectedTab } = selectionConfig

            const GetCards = (cardData) => {
                return (
                    <Card className="m-2 inner-content-card">
                        <CardBody>
                            <Row xs="1" md="1">
                                <Col className="text-left"><h5>{cardData.title}</h5></Col>
                                <Col>
                                    <Row>
                                        <Col className="text-left" xs="8"><small>{cardData.description}</small></Col>
                                        <Col className="text-center" xs="4"></Col>
                                    </Row>
                                </Col>
                                <Col className="text-center">
                                    <Button variant="primary" size="sm" className="w-100 mt-3" onClick={() => handleCardClick(cardData.solutionConfig)}>Create</Button>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                )
            }

            return (
                <Row xs="1" md="2">
                    {options[selectionConfig.mainNav].hasTabs ?
                        innerContent[selectedTab].map((cardData, cardDataIdx) =>
                            <Col key={cardDataIdx} >
                                <GetCards {...cardData} />
                            </Col>)
                        :
                        <>
                            {Object.keys(innerContent).map((cardData, cardDataIdx) =>
                                <Col key={cardDataIdx}>
                                    <GetCards {...innerContent[cardData]} />
                                </Col>
                            )}
                        </>
                    }
                </Row>
            );
        }

        if (options[selectionConfig.mainNav].hasTabs) {
            return (
                <div className="text-center">
                    <div className="inner-tabs-container">
                        <Row xs="4" md="4" className="m-0">
                            {Object.keys(options[selectionConfig.mainNav].innerContent).map((innerTab, innerTabIdx) =>
                                <Col key={innerTabIdx} className="p-0"
                                    onClick={() => setSelectionConfig({
                                        selectedTab: innerTab,
                                        mainNav: selectionConfig.mainNav
                                    })}
                                >
                                    <label className={`px-2 ${selectionConfig.selectedTab === innerTab && 'active-inner-tab'}`}>
                                        {innerTab.slice(0, 1) + innerTab.slice(1).toLowerCase()}
                                    </label>
                                </Col>
                            )}
                        </Row>
                    </div>
                    <div className="inner-tabs-content">
                        <RenderInnerContent />
                        {/* {() => RenderInnerContent} */}
                    </div>
                </div>
            )

        } else {
            if (selectionConfig.mainNav === "IMPORT") {
                return (
                    <div>
                        {console.log("IMPORT CLICKED")}
                    </div>
                )
            }
            return (
                <div>
                    <RenderInnerContent />
                    {/* {() => RenderInnerContent} */}
                </div>
            )
        }
    }
    return (
        <div>
            {!renderStep &&
                <div className="option-container">
                    <h5 className="p-3">Create Solution</h5>
                    <div className="option-nav-container">
                        {Object.keys(dataOptions).map((nav, navIdx) =>
                            <div key={navIdx}
                                className={`nav-list p-2 ${selectionConfig.mainNav === nav && 'active-nav'}`}
                                onClick={() => setSelectionConfig({
                                    mainNav: nav,
                                    selectedTab: dataOptions[nav].hasTabs && Object.keys(dataOptions[nav].innerContent)[0]
                                })}
                            >
                                <label className="nav-title">{dataOptions[nav].label}</label>
                                <label className="nav-description">{dataOptions[nav].description}</label>
                            </div>
                        )}
                    </div>
                    <div className="option-content-container">
                        {<RenderSelectedTab />}
                    </div>
                </div>
            }{renderStep &&
                <div>
                    <Row className="m-0 p-3">
                        <Col className="p-0 text-left">
                            <h5>{formConfig.type.slice(0, 1).toUpperCase() + formConfig.type.slice(1).toLowerCase()} configure</h5>
                        </Col>
                        <Col className="p-0 text-right ">
                            <i className="fa fa-times" onClick={handleClose} />
                        </Col>
                    </Row>
                    <Row className="m-0">
                        <Col className="p-0">
                            <FormConfig.Provider value = {{formConfig: formConfig}}>
                                <SolutionConfig />
                            </FormConfig.Provider>
                        </Col>
                    </Row>
                </div>
            }
        </div>
    );
}