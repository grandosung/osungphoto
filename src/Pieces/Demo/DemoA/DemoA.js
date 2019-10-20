import React from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
    width:100%;
    height:1200px;
    display:grid;
    grid-template-columns: 2fr  8fr;
    grid-template-rows:  100vh 100vh;
    background-color:blue;
`

const Header = styled.div`
    width:100%;
    height:40px;
    border-bottom:solid 8px grey;
    background-color:red;
    position:absolute;
    top:0;

`
const Slide = styled.div`
    grid-column:1;
    grid-row:1;
    background-color:green;  
`




const DemoA=() => (
    <>
        <Header>sad</Header>    
        <Wrapper>
            <Slide>sss</Slide>
        </Wrapper>
    </>
)


export default DemoA;