import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import GamePage from "./Pages/Game";
import Settings from "./Pages/Settings";
import Feedback from "./Pages/Feedback";
import Ranking from "./Pages/Ranking";

export default function App() {
  return (
    <div className="flex w-screen h-screen justify-center items-center bg-gradient-to-r from-slate-400 to-slate-700">
      <Switch>
        <Route exact path="/trivia" component={Login} />
        <Route path="/game" component={GamePage} />
        <Route path="/settings" component={Settings} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/ranking" component={Ranking} />
      </Switch>
    </div>
  );
}

/* <img src={ logo } className="App-logo" alt="logo" /> */
