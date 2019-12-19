import React from 'react';
import styled,{ keyframes } from "styled-components";
import Lang from '../Utils/Language';
import pok from './pok.jpg';
import  {  Link } from "react-router-dom";




const Main = styled.div`
    display:flex;
    position:relative;
    width:100%;
    min-width:1200px;
    background-image:url(${pok});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    height:400px;
    justify-content:center;
    
`
//active props 
const fade = keyframes`
    from {opacity: .6}
    to {opacity: 1}
`

const Boss = styled.div`
    width:230px;
    height:40px;
    border:solid 0.6px white;
    background-color:${props => props.theme.blackOpacity};
    margin-top:260px;
    padding-top:8.4px;
    font-size: 14pt;
    color:white;
    text-align:center;
    animation:${fade} 1.5s;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    
    
`;

const Bar =styled.div`
    display:flex;
    width:100%;
    height:58px;
    border-top:solid 1px grey;
    background-color:${props=> props.theme.blackOpacity};
     position:absolute;
     bottom:0;
     z-index:4000;
    justify-content:center;
`; 


const Item =styled.div`
    padding-top:22px;
    width:${props => props.width};
    min-width:130px;
    height:100%;
    color:white;
    text-align:center;
    &:active ${Boss} {
        border: solid 70px white;
    }
`;

const Item2 = styled(Item)`
    border-bottom:solid 2px aqua;
    color:aqua;
`





export default ({title,subs,selected}) => {
    const Makel = () => {
        const man = subs.map((boy,idx) => {
            const cho = selected === boy ?   
             <Item2 key={idx}><Link to=
                {{
                    pathname:`/${title}/${boy}`,
                    state:{title,subs}
                }}
                style={{ textDecoration: 'none', color: 'aqua' }} 
                >
                    {Lang.texts[boy]}
                </Link> 
             </Item2>
            : <Item key={idx}>
                <Link to=
                    {{
                         pathname:`/${title}/${boy}`,
                        state:{title,subs}
                    }}
                    style={{ textDecoration: 'none', color: 'white' }} 
                    >
                        {Lang.texts[boy]}
                </Link> 
              </Item>
            return cho
        })
        return man;
    }

    return (
        <Main>
            {/* <Boss>
                {`${Lang.texts[title]} > ${Lang.texts[selected]}`}
            </Boss> */}
            <Bar>
               {Makel()}
            </Bar>
        </Main>

    )
    
}