import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./styles/styles.scss";
import "./styles/overrides.scss";
import "./styles/variables.scss";
import Actions from "./components/Actions";
import App from "./Assignment/App";
import Home from "./Assignment/Home";
import Footer from "./Assignment/Footer";
import Header from "./Assignment/Header";
import Table from "./Components-table/Table";
import Sidebar from "./Assignment/Sidebar";
import DataBase from "./DatabaseUi/DataBase";
import Practice from "./Practice";
import Task1 from "./Task/Task1";
import Task from "./Task/Task";

export default function Root() {
  const [isOpen, setIsopen] = useState(false);
  let handleClick = () => {
    setIsopen(!isOpen);
  };
  return (
    <BrowserRouter>
      {/* <div className="app-container">
        <Header handleClick={handleClick} isOpen={isOpen} />
        {isOpen && <Sidebar isOpen={isOpen} setIsopen={handleClick}></Sidebar>}
        <div className="content"> */}
          <Switch>
            <Route exact path="/" render={()=>(
            // <Practice/>
            <Task/>
            )}/>
            {/* <Route exact path="/" render={() => <Home />} />
            <Route
              path="/assignment1"
              render={() => <Actions setIsopen={setIsopen} />}
            />
            <Route path="/assignment2" render={() => <App />} />
            <Route path="/assignment3" render={() => <Table />} />
            <Route path="/assignment4" render={() => <DataBase />} /> */}
          </Switch>
        {/* </div>
        <Footer />
      </div> */}
    </BrowserRouter>
  );
}
