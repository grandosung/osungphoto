import React from 'react';
import styled from "styled-components";

const Energy = styled.div`
    width:100%;
    height:700px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${props => props.theme.lightWhiteColor};
    
`

const Cell = styled.div`
    width:100%;
    height:100%;
    border:solid 1px grey;
    gird-area:cell;
    background-color:${props => props.color};

    
`

const Cells = styled.div`
    display: inline-grid;
    width:100%;
    height:600px;
    grid-template-columns:1fr 7fr 3fr 2fr;
    grid-template-rows:  repeat(4, 40px);
    grid-gap: 0px;
    margin:40px 0 20px 0;

`
const Lavel = styled.div`
    width:100%;

`

const Num = styled.div`

`//페이지 숫자 






export default () => (
    <Energy>
        <Lavel></Lavel>
        <Cells>
            {"함수"}
        </Cells>
        <Num></Num>
       
    </Energy>
    
    
)


