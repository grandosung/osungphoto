import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Demo from '../Pieces/Demo'


const Routes=() => (
    <Switch>
        <Route exact path="/" component={Demo} />
        <Route />
    </Switch>
)

export default Routes;