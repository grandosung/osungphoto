import React from 'react';
import styled from "styled-components";
import leaf from './leaf.png'

const Energy = styled.div`
    width:100%;
    height:700px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${props => props.theme.lightWhiteColor};
    
`
const Left = styled.div`
    width:520px;
    height:600px


`
const Ptag = styled.p`
    font-size: ${props => props.size}px;
    color: #777777;
    line-height: 1.6em;


`

const Right = styled.div`
    
    opacity:0.7;
    width:300px;
    height:400px;
`
export default () => (
    <Energy>
        <Left>
         <Ptag size={28}>홈페이지를 방문하여 주신 고객 여러분께<br/>
            진심으로 감사의 말씀을 드립니다.</Ptag> <br/><br/>

            <Ptag size={15}>여기 본타쿤은 과거 우리나라의 실크스크린 잉크산업의<br/>
            기술적 불모지에서 국내 대표 잉크회사이고자 출발한 샤이닝은</Ptag><br/><br/>

            <Ptag size={15}> 2011년 사업분할을 통해 전문 Package업체로 거듭난 인성산업은 지치지<br/>
            않는 열정과 끊임없는 소통을 바탕으로 세계 속의 기업으로 발돋움하고 <br/> 
            Toatal Package Solution을 구현하고자 끊임없이 노력하고 도전할 것 입니다.</Ptag><br/><br/>

            <Ptag size={15}> 배움과 휴식의 적절한 조화, 교육진행 시 교육의 효율을 높이고 여유롭게<br/>
            휴식을 즐기실 수 있도록 최선을 다하고 있으며,<br/>
            배움의 열기를 마음껏 펼쳐 변화의 시대를 주도해 나갈 수 있도록<br/>
            지원하는데 전력을 다하고 있습니다.</Ptag><br/><br/>

            <Ptag size={15}> 샤이닝은 대교그룹 내 교육전문에서 운영하고 있으며,<br/>
            대교그룹 구성원의 역량강화 교육지원과 함께 각 기업고객의<br/>
            위탁교육(노동부 환급과정 포함)을 운영하고 있습니다.</Ptag><br/><br/>
        </Left>
        <Right>
            <img src={leaf} width="100%" height="100%" />
        </Right>
    </Energy>
    
    
)


