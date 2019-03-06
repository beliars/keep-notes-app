import React from 'react';
import { Route, RouteComponentProps, Switch } from "react-router-dom";

import Home from '../../../pages/Home/Home';
import NotFound from '../../../pages/NotFound/NotFound';
import Header from '../../Header/Header';


const MainRoutes = ({match}: RouteComponentProps) => {
  return (
    <div className="app-main">
      <Header/>
      <Switch>
        <Route path="" exact component={Home}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
};

export default MainRoutes;