import React from 'react';
import styled from "styled-components";
import city from './city.png';
import Top from '../../Components/Top';
import Footer from '../../Components/Footer';
import Hello from '../BontaA/Hello';
import Location from '../BontaA/Location';
import Nature from '../BontaA/Nature';
import NightView from '../BontaA/NightView';
import People from '../BontaA/People';
import Enroll from '../BontaA/Enroll';
import EList from '../BontaA/EList';



//컴포넌트 반환 함수 나중에 따로?

const Main = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:${props=> props.theme.fullWidth};
`
const Wrap = styled.div`
    width:100%;
    height:auto;
    

`






export default ({location,match}) => {
 
  const Demantion =() =>{ 
  switch (match.params.param) {
    case 'comhello': return <Hello/>
    case 'comlocation': return <Location/>
    case 'people': return <People/>
    case 'nature': return <Nature/>
    case 'nightview': return <NightView/>
    case 'onenroll': return <Enroll/>
    case 'onlist': return <EList/>
    default: console.log('Sorry, we are out of ');
  }
  
}

  return(

  <Main>
    <Top title={location.state.title} selected={match.params.param} subs={location.state.subs} />
    <Wrap>
      {/* <Hello/> */}
      {Demantion()}
    </Wrap>  
 
    <Footer/>
  </Main>  
  )
}