import React, { useContext } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import { StateContext } from "./components/StateProvider";

function App() {
  const globalState = useContext(StateContext);
  const {
    state: { user },
  } = globalState;

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <div className="background"></div>
          <div className="app__body">
            <Router>
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
              </Switch>
            </Router>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
