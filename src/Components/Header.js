import React from 'react';
import styled from "styled-components";
import text from '../Utils/Language'

const Header = styled.div`
    width:100%;
    height:58px;
    border-bottom:solid 1px grey;
    position:absolute;
    top:0;

`


export default () => (
    <Header>
     <div onClick={()=>{text.Change('jp')}}> 日本語</div>
     <div onClick={()=>{text.Change('ko')}}>한국어</div>
    </Header>
)