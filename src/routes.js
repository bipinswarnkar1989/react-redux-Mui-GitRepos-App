import React from 'react';

import {
        BrowserRouter as Router,
        Route,
        Link,
        Switch,
        Redirect
      } from 'react-router-dom'
      
import AppWrapper from './containers/AppWrapper';
import Home from './containers/Home';
import UserResults from './containers/UserResults';
import UserDetails from './containers/UserDetails';

const routes =  (
        <div>
        <AppWrapper />
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/result" component={UserResults}/>
        <Route path="/details/:user" component={UserDetails}/>
        </Switch>
        </div>
)

export default routes