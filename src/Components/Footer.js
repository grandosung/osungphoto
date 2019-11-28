import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components";

const Foot = styled.div`
    display:flex;
    flex-direction:column;
    position: relative;
    width:100%;
    height:340px;
   border:solid 3px red ;
    background-color:${props => props.theme.whiteGreyColor};
`
 // position:absolute;
    // bottom:0;

const Label = styled.div`
    margin:13px;
    cursor:pointer;
`


const Box = styled.div`
    font-size: 14px;
    margin:0 auto;
    display:flex;
    justify-content:center;
    margin-top:46px;
    width:${props => props.theme.maxWidth};
    text-align:center;
`

const InfoBox = styled.p`
    margin:0 auto;
    color:grey;
    text-align:center;
    width:${props => props.theme.maxWidth};
    margin-top:32px;
`
const FooterLast = styled.div`
    width:1200px;
    height:50px;
    color:#646566;
    background-color:#302F2F;
    border-radius: 15px 15px 0px 0px;
    position:absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom:0;
    padding:20px;
    padding-left:90px;


`

export default () => (
    
    <Foot>
      <Box>
          사진이 들어갈 자리
      </Box>
      <Box>
         <Label onClick={()=> {alert('ok')}}>회사소개</Label> 
         <Label>사업분야</Label>
         <Label>주요실적</Label>
         <Label>포토폴리오</Label>
         <Label>온라인상담문의</Label>
         <Label>고객센터</Label>
    {/* 봐서 라벨들 함수? */}

      </Box>
      <InfoBox>
         경기도 부천시 원미구 중동 1152 상록센트럴타워 505호 샤이닝(Make24팀)<br/><br/>
         사업자 번호 : 130-37-46318(등록2007년) 통신판매업종신고 : 제2010-경기부천-924호 상호 : 샤이닝 대표 : 오성민 <br/><br/>
         고객센터:1544-0634 팩스:0505-200-6060 이메일:hdweb@hdweb.co.kr<br/><br/>
      </InfoBox>
      <FooterLast>
           Copyright ⓒ 샤이닝 - 인테리어 홈페이지 샘플 All rights reserved.
      </FooterLast>

    </Foot>
    
)


{/* <Switch>
        <Route exact path="/" component={} />
        <Route />
    </Switch> */}