import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "../CRUDComponents/Home";
import { AddUser } from "../CRUDComponents/AddUser";
import { EditUser } from "../CRUDComponents/EditUser";
import { GlobalProvider } from "../context/GlobalState";

function CRUD() {
  return (
    <div style={{ maxWidth: "30rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default CRUD;