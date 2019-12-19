import React from 'react';
import styled from "styled-components";
import hanabi from './hanabi.jpg';


const Energy = styled.div`
    width:100%;
    height:700px;
    display:flex;
    flex-direction:column;
    background-color:white;
    padding-top:20px;

`


const Text = styled.div`
    width:100%;
    padding-top:20px;
    height:300px;
    margin:7px 0  7px 0 ;

`
const Text2 = styled(Text)`
    padding:20px 0 0px 30px;
    height:270px;
    background-color:${props => props.theme.lightWhiteColor};
    border-top: solid 2px red;
    margin-bottom:12px;
`

const  Ptag = styled.p`
    font-size: ${props => props.size}px;
    color: #777777;
    color:${props => props.color};
    line-height: 1.6em;


`



export default () => (
    <Energy>
       <Text2>
            <Ptag color={'red'} size={33}>People Picture </Ptag>
            <Ptag color={'black'} size={24}>사람들의 마음을 저장합니다.</Ptag><br/>
            <Ptag size={14}>아무리 좋은 설계라도 생활에 있어 불편하다면 품질이 저하되어 구조성능을 제대로 발휘할 수 없습니다.</Ptag>
       </Text2>
       <img src={hanabi} width="100%" height="300px" />
       <Text>
           <Ptag size={13}> 그래서 저희 회사는 ‘고객이 원하는 공간의 창조’를 가치로
             정확한 고객의 니즈 파악 및 전문가 집단의 분석을 통하여 기능과 개성을 동시에 지닌 공간을 만들어가고 있습니다.</Ptag><br/>

             <Ptag size={13}> 또한 친환경, 친자연적 건물을 추구하여, 설계를 할 때부터 사람과 공간, 
            자연과 환경을 제일 먼저 생각하려고 항상 노력하고 있습니다. 무엇보다 모든 유해한 
            건축자재를 배재하고 최대한 친<br/>환경적인 건축자재와 건축공법을 사용하여 자연에 가장 가까운 집안에서의 
            건강하고 풍요로운 삶을 지향합니다. ‘오랫동안 머물 수 있는 편안한 공간‘을 베이스로 삼고 설계부터 현장기술지<br/>원 등
             교과서에 없는 소중한 경험을 바탕으로 설계를 할 때부터 인간과 공간 또 자연과 환경을 제일 먼저 생각하려고 
             항상 노력하겠습니다.</Ptag><br/>

             <Ptag size={13}> 어느 장소라도 아늑하고 실용적인 공간으로 만드는 사람들로 기본적인 믿음과 신뢰를 바탕으로 즐겁고
             행복한 사람들의 공간을 만들기 위해 열정의 오늘을 설계하겠습니다.</Ptag>


       </Text>
    </Energy>
    
    
)


