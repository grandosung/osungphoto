import React from 'react';
import  {  BrowserRouter as Router, Route, Switch,  } from "react-router-dom";
import Demo from '../Pieces/Demo'
import BontaS from '../Pieces/BontaS';




const Routes=() => (
    <Switch>
        <Route exact path="/" component={Demo} />
        <Route path="/comintro/:param" component={BontaS}/>
        <Route path="/category/:param" component={BontaS}/>
        <Route path="/portfolio/:param" component={BontaS}/>
        <Route path="/online/:param" component={BontaS}/>

    </Switch>
)

export default Routes;