import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

const Foot = styled.div`
    width:100%;
    height:360px;
    position:absolute;
    bottom:0;
    background-color:${props => props.theme.blueColor};
`


const Footer=() => (

    <Foot>
        d
    </Foot>
    
)

export default Footer;

{/* <Switch>
        <Route exact path="/" component={} />
        <Route />
    </Switch> */}
