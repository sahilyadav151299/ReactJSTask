import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
// routing imports
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// layout imports
import NavBar from "./components/layout/NavBar";
// components imports
import Home from "./components/pages/Home";
import AddUserForm from "./components/pages/AddUserForm";
import UserList from "./components/pages/UserList";
import EditUserForm from "./components/pages/EditUserForm";

function App() {
  
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddUserForm} />
          <Route exact path="/list" component={UserList} />
          <Route exact path="/edit/:uniqueID" component={EditUserForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
