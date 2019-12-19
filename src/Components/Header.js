import React from 'react';
import styled from "styled-components";
import Lang from '../Utils/Language'
import  {  Link } from "react-router-dom";


//헤더 색깔 인덱스만 반

const Header = styled.div`
    width:100%;
    background-color:${props=> props.theme.blackOpacity};
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
    margin: 4px 0 0 80px;
    padding-top: 8px;
    border:solid 1px white;
    color:white;
    float:left;
    width:200px;
    height:46px;
    text-align:center;
    font-size: 22pt;
    font-family: ${props => props.theme.font};

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
    color: white;
    text-decoration: none;
    padding-top:10px;
    font-size:15px;
    cursor:pointer;
    background-color:${props=> props.theme.blackOpacity};
    &:hover {
        background-color:${props => props.theme.blackColor};
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
const man = [
    {
        "comintro":["comhello", "comlocation"]
    },
    {
        "category":["people","nature","nightview"]
    },
    {
        "portfolio":[]
    },
    {
        "online":["onenroll","onlist"]
    },
];


const Makelist =() => {
    

    const guy = man.map((mon,id) => {
        const title = Object.keys(mon)[0]
        const subs = Object.values(mon)[0]
        const boys = subs.map((tue,idx) => {
            
           return  (
            <Sub key={idx}>
                <Link to={
                    {
                        pathname:`/${title}/${tue}`,
                        state:{title,subs}
                    }
                 }
                 style={{ textDecoration: 'none', color: 'white' }} 
                 >
                    {Lang.texts[tue]}
                </Link>
            </Sub>
           )
        })

       return  (
        <Items key={id}>
        <Item>{Lang.texts[title]}</Item>
            <Subs>
                {boys}
            </Subs>
        </Items>
       )
    })
    return guy;
};

export default () => (
    

   <Header>
    <Logo>BONTA KUN!</Logo>
   
    <Drops>
        {Makelist()}
       <Items>
           <Item>LANGUAGE</Item>
           <Subs>
               <Sub>日本語</Sub>
               <Sub>한국어</Sub>
           </Subs>
       </Items>
    </Drops>   
   
   </Header>
  );
 