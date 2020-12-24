import React from 'react';
import './App.css';
import { Tabs, Tab } from 'react-bootstrap';

//REACT BASIC HOOKS
// import ClassCounter from './components/useState/ClassCounter';
// import HooksCounter from './components/useState/HooksCounter';
// import HooksForm from './components/useState/HooksForm';
// import HooksFormFields from './components/useState/HooksFormFields';
import ClassCounterTwo from './components/useEffect/ClassCounterTwo';
import HooksCounterTwo from './components/useEffect/HooksCounterTwo';
import MouseContainer from './components/useEffect/MouseContainer';
// import ComponentB from './components/useContext/ComponentB';

// FROM HERE USEREDUCERS
// import SimpleState from './components/useReducer/SimpleState';
// import ComplexState from './components/useReducer/ComplexState';
// import MultipleUseReducers from './components/useReducer/MultipleUseReducers';
// import UseReducerWithUseContext from './components/useReducerWithUseContext/UseRducerWithUseContext';
import GetApiOne from './components/getApiWithHooks/GetApiOne';
import GetApiTwo from './components/getApiWithHooks/GetApiTwo';

// FROM HERE USECALLBACK
import ParentComponent from './components/useCallBack/ParentComponent';

// FROM HERE USEMEMO
// import UseMemoParent from './components/useMemo/UseMemoParent';

// FROM HERE USEREF
import FocusInput from './components/useRef/FocusInput';
// import ClassTimer from './components/useRef/ClassTimer';
import FunctionTimer from './components/useRef/FunctionTimer';

// FROM HERE CUSTOM HOOKS
// import DocTitleOne from './components/customHooks/useDocTitle/DocTitleOne.js';
// import DocTitleTwo from './components/customHooks/useDocTitle/DocTitleTwo';
// import CounterOne from './components/customHooks/useCounter/CounterOne';
// import CounterTwo from './components/customHooks/useCounter/CounterTwo';
// import UserForm from './components/customHooks/useInput/UserForm';

// FROM HERE HOOKS CRUD
// import CRUD from './components/hooksCRUD/mainComponent/CRUD';

// FROM HERE ARRAY METHODS
// import MainComponent from './components/arrayMethods/rootComponent/MainComponent';

// QUESTIONS FROM SESSION
import ErrorBoundary from './components/qstfromsession/errorBoundary/ErrorBoundary';
// import GetError from './components/qstfromsession/errorBoundary/GetError';
import ForError from './components/qstfromsession/errorBoundary/ForError';
import CallingApiAfterAction from './components/qstfromsession/multipleApiCalls/CallingApiAfterAction'
import ObjectsToArrayObjects from './components/qstfromsession/jsonObjectsToArrayObjects/ObjectsToArrayObjects'


// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="useRef" id="navbar">

        {/* FROM HERE REACT BASIC HOOKS */}
        {/* <Tab eventKey="ClassCounter" title="ClassCounter">
          <ClassCounter />
        </Tab>
        <Tab eventKey="HooksCounter" title="HooksCounter">
          <HooksCounter />
        </Tab>
        <Tab eventKey="HooksForm" title="Form in hooks hardcoded">
          <HooksForm />
        </Tab>
        <Tab eventKey="HooksFormFields" title="Form in hooks dynamic">
          <HooksFormFields />
        </Tab> */}
        <Tab eventKey="ClassCounterTwo" title="ClassCounterTwo">
          <ClassCounterTwo />
        </Tab>
        <Tab eventKey="HooksCounterTwo" title="HooksCounterTwo">
          <HooksCounterTwo />
        </Tab>
        <Tab eventKey="MouseContainer" title="MouseContainer">
          <MouseContainer />
        </Tab>
        {/* <Tab eventKey="useContext" title="useContext">
          <UserContext.Provider value={'Prakash'}>
            <ChannelContext.Provider value={'React Js'}>
              <ComponentB />
            </ChannelContext.Provider>
          </UserContext.Provider>
        </Tab> */}

        {/* FROM HERE USEREDUCERS */}
        {/* <Tab eventKey="SimpleState" title="SimpleState"> 
          <SimpleState />
        </Tab>
        <Tab eventKey="ComplexState" title="ComplexState">
          <ComplexState />
        </Tab>
        <Tab eventKey="MultipleUseReducers" title="MultipleUseReducers">
          <MultipleUseReducers />
        </Tab>
        <Tab eventKey="UseReducerWithUseContext" title="UseReducerWithUseContext">
          <UseReducerWithUseContext />
        </Tab> */}
        <Tab eventKey="GetApiOne" title="GetApiOne">
          <h5>By using useState and useEffect</h5>
          <GetApiOne />
        </Tab>
        <Tab eventKey="GetApiTwo" title="GetApiTwo">
          <h5>By using useReducer and useEffect</h5>
          <GetApiTwo />
        </Tab>

        {/* FROM HERE USECALLBACK */}
        <Tab eventKey="useCallBack" title="useCallBack">
          <ParentComponent />
        </Tab>

        {/* FROM HERE USEMEMO */}
        {/* <Tab eventKey="useMemo" title="useMemo">
          <UseMemoParent />
        </Tab> */}

        {/* FROM HERE USEREF */}
        <Tab eventKey="useRef" title="useRef">
          <FocusInput />
        </Tab>
        <Tab eventKey="useRefTimer" title="useRef for Timer">
          {/* <ClassTimer /> */}
          <FunctionTimer />
        </Tab>

        {/* FROM HERE CUSTOM HOOKS */}
        {/* <Tab eventKey="useDocTitle" title="useDocTitle">
          <h5>Custom hook</h5>
          <DocTitleOne />
          <DocTitleTwo />
        </Tab>
        <Tab eventKey="useInput" title="useInput">   
          <h5>Custom hook</h5>
          <UserForm />
        </Tab>
        <Tab eventKey="useCounter" title="useCounter">   
          <h5>Custom hook</h5>
          <CounterOne />
          <CounterTwo />
        </Tab> */}

        {/* FROM HERE HOOKS CRUD */}
        {/* <Tab eventKey="hooksCRUD" title="hooksCRUD">
          <CRUD />
        </Tab> */}

        {/* FROM HERE ARRAY METHODS */}
        {/* <Tab eventKey="arrayMethods" title="arrayMethods">
          <MainComponent />
        </Tab> */}


        {/* QUESTIONS FROM SESSION*/}
        <Tab eventKey="ErrorBoundary" title="ErrorBoundary">
          <ErrorBoundary>
            {/* <GetError /> */}
            <ForError />
          </ErrorBoundary>
        </Tab>
        <Tab eventKey="MultipleApis" title="MultipleApis">
          <CallingApiAfterAction />
        </Tab>
        <Tab eventKey="jsonObjectsToArrayObjects" title="jsonObjectsToArrayObjects">
          <ObjectsToArrayObjects />
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
