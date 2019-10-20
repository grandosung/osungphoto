import React from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display:grid;
    grid-template-columns: 1fr  7fr;
    grid-template-rows: 50px 100vh 100vh;
    background-color:blue;
`

const Header = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    z-index: 2;
    border-bottom:solid 1px grey;
    background-color:red;

`





const DemoA=() => (
    
    <Wrapper>
        <Header>sad</Header>
    </Wrapper>
)


export default DemoA;