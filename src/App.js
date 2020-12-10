import React from 'react';
import './App.css';
import { Row, Col, Card, CardBody, CardHeader } from 'reactstrap';
// import ClassCounter from './components/useState/ClassCounter';
// import HooksCounter from './components/useState/HooksCounter';
// import HooksForm from './components/useState/HooksForm';
// import HooksFormFields from './components/useState/HooksFormFields';
// import ClassCounterTwo from './components/useEffect/ClassCounterTwo';
// import HooksCounterTwo from './components/useEffect/HooksCounterTwo';
// import MouseContainer from './components/useEffect/MouseContainer';
// import ComponentB from './components/useContext/ComponentB';
// import UserForm from './components/customHooks/useInput/UserForm';
// import DocTitleOne from './components/customHooks/useDocTitle/DocTitleOne.js';
// import DocTitleTwo from './components/customHooks/useDocTitle/DocTitleTwo';
import SolutionOptions from './components/solutions/SolutionOptions'

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <Row xs="2" className="m-0">
        <Col>
          <Card className="mt-2">
            <CardHeader>Using Class component</CardHeader>
            <CardBody>
              <ClassCounter />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="mt-2">
            <CardHeader>
              <Row>
                <Col className="text-left">Using Func component(Hooks)</Col>
                <Col className="text-right">useState</Col>
              </Row>
            </CardHeader>
            <CardBody>
              <HooksCounter />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="mt-2">
            <CardHeader>
              <Row>
                <Col className="text-left">Form in hooks(Hardcoded)</Col>
                <Col className="text-right">useState</Col>
              </Row>
            </CardHeader>
            <CardBody>
              <HooksForm />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="mt-2">
            <CardHeader>
              <Row>
                <Col className="text-left">Form in hooks(Dynamic)</Col>
                <Col className="text-right">useState</Col>
              </Row>
            </CardHeader>
            <CardBody>
              <HooksFormFields />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="mt-2">
            <CardHeader>
              <Row>
                <Col className="text-left">In Class Component update document title</Col>
              </Row>
            </CardHeader>
            <CardBody>
              <ClassCounterTwo />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="mt-2">
            <CardHeader>
              <Row>
                <Col className="text-left">In Hooks Used Api </Col>
                <Col className="text-right">useState & useEffect</Col>
              </Row>
            </CardHeader>
            <CardBody>
              <HooksCounterTwo />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mt-2">
            <CardBody>
              <MouseContainer />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row xs="2">
        <Col>
          <Card className="mt-2">
            <CardHeader>
              <Row>
                <Col className="text-left">in Hooks</Col>
                <Col className="text-right">useContext</Col>
              </Row>
            </CardHeader>
            <CardBody>
              <UserContext.Provider value={'Prakash'}>
                <ChannelContext.Provider value={'React Js'}>
                  <ComponentB />
                </ChannelContext.Provider>
              </UserContext.Provider>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="mt-2">
          <CardHeader>
              <Row>
                <Col className="text-left">Custom hooks</Col>
                <Col className="text-right">useInput</Col>
              </Row>
            </CardHeader>
            <CardBody>
              <UserForm />
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="mt-2">
          <CardHeader>
              <Row>
                <Col className="text-left">Custom hooks</Col>
                <Col className="text-right">useDocTitle</Col>
              </Row>
            </CardHeader>
            <CardBody>
              <span className="m-1 float-left"><DocTitleOne /></span>
              <span className="m-1 float-right"><DocTitleTwo /></span>
            </CardBody>
          </Card>
        </Col>
      </Row> */}
      <Row>
        <Col>
          <SolutionOptions />
        </Col>
      </Row>
    </div>
  );
}

export default App;
