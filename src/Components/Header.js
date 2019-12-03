import React from 'react';
import styled from "styled-components";
import Lang from '../Utils/Language'

const Header = styled.div`
    width:${props=> props.theme.fullWidth};
    min-width:1200px;
    height:58px;
    border-bottom:solid 1px grey;
    position:absolute;
    top:0;
    opacity:1;
    z-index:4000;

`
const Drops = styled.div`
    width:auto;
    height:40px;
    margin-top:10px;
    margin-left:300px;
    padding-top:10px;
    color:white;
    float:left;
`
const Logo = styled.div`
    margin:4px 0 0 62px;
    float:left;
    width:400px;
    text-transform: uppercase;
    font-family: verdana;
    font-size: 2.5em;
    font-weight: 600;
    color: aqua;
    text-shadow: 1px 1px 1px #919191,
        1px 2px 1px #919191,
        1px 3px 1px #919191,
        1px 4px 1px #919191,
        1px 5px 1px #919191,
        1px 6px 1px #919191,
        1px 7px 1px #919191,
        1px 8px 1px #919191,
        1px 9px 1px #919191,
        1px 10px 1px #919191,
    1px 14px 2px rgba(16,16,16,0.4),
    1px 17px 5px rgba(16,16,16,0.2),
    1px 20px 30px rgba(16,16,16,0.2),
    1px 20px 50px rgba(16,16,16,0.4);
`

const Subs = styled.div`
    width:94px;
    margin-top:34px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    display:none;
`
//    display:none;


const Sub = styled.div`
    width:94px;
    height:34px;
    text-align:center;
    color: black;
    text-decoration: none;
    padding-top:10px;
    font-size:15px;
    cursor:pointer;
    background-color:${props => props.theme.whiteGreyColor};
    &:hover {
        background-color:${props => props.theme.lightGreyColor};
    }

`


const Items = styled.div`
    width:94px;
    float:left;
    margin: 4px 8px 4px 4px;
    font-size:13pt;
    cursor:pointer;
    &:hover ${Subs} { display:block;}

    
`
const Item = styled.div`
    width:94px;
    float:left;
    text-align:center;

`


export default () => (
    <Header>
     <Logo>Bonta-Kun</Logo>
     <Drops>
        <Items>
        <Item>{Lang.texts.com_intro}</Item>
            <Subs>
                <Sub>{Lang.texts.com_hello}</Sub>
                <Sub>{Lang.texts.com_location}</Sub>
            </Subs>
        </Items>
        <Items>
        <Item>{Lang.texts.category}</Item>
            <Subs>
                <Sub>{Lang.texts.people}</Sub>
                <Sub>{Lang.texts.nature}</Sub>
                <Sub>{Lang.texts.night_view}</Sub>
            </Subs>
        </Items>
        <Items><Item>{Lang.texts.portfolio}</Item></Items>
        <Items>
            <Item>{Lang.texts.online}</Item>
            <Subs>
                <Sub>{Lang.texts.on_enroll}</Sub>
                <Sub>{Lang.texts.on_list}</Sub>
            </Subs>
        </Items>
        <Items>
            <Item>Language</Item>
            <Subs>
                <Sub>日本語</Sub>
                <Sub>한국어</Sub>
            </Subs>
        </Items>
     </Drops>   
    
    </Header>
)