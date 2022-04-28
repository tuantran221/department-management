import React from "react";
import { Switch, Route } from "react-router-dom";
import Management from "../pages/Management";
import Report from "../pages/Report";
import Addpage from "../pages/Addpage";


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Management} />
      <Route path="/Report" component={Report} />
      <Route path="/Addpage" component={Addpage} />
    </Switch>
  );
};

export default Routes;