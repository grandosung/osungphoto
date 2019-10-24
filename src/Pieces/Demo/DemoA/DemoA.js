import React from 'react';
import styled from "styled-components";
import c9 from './c9.jpg';


const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display:grid;
    grid-template-columns: 2.3fr  8fr;
    grid-template-rows:  100vh 100vh;
`

const Header = styled.div`
    width:100%;
    height:58px;
    border-bottom:solid 1px grey;
    position:absolute;
    top:0;

`
const Left = styled.div`
    grid-column:1;
    grid-row:1;
    padding-top:68px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Sidepic = styled.div`
    width: 240px;
    height:28vh;
    overflow:hidden;
    border:solid 2px red;
    margin-bottom:30px;
    margin-left:40px;
    transition: transform 1s ease;
    img{
        width:100%;
        height:100%;
    } 
    &:hover img{
        transform: scale(1.1)
    }


`

const Right= styled.div`
    grid-column:2;
    grid-row:1;
    border:solid 1px blue;
    background-image: url(${c9});
    background-size:cover;
    background-repeat:no-repeat;

`

const LeftText = styled.div`
    position:relative;
    margin:auto;
    bottom:80px;
    color:white;
    text-align:center;
    
`


const DemoA=() => (
    <>
        <Header>sad</Header>    
        <Wrapper>
            <Left>
                <Sidepic>
                    <img  src={c9}/>
                    <LeftText>
                         INTERIOR<br/><br/>
                         인테리어
                    </LeftText>

                </Sidepic>
                <Sidepic>
                    <img src={c9}/>
                    <LeftText>
                        REMODELING<br/><br/>
                        리모델링
                    </LeftText>
                </Sidepic>
                <Sidepic>
                    <img src={c9}/>
                    <LeftText>
                        DISPLAY<br/><br/>
                        디스플레이
                    </LeftText>

                </Sidepic>
            </Left>
            <Right background={'./c9.jpg'}>
            Design with
DISTINCTIONI don't think it's just a physical space to build and decorate buildings.
It's a place to work in a fun place, a rest area, and a place to live for future dreams.
포토폴리오 부분까지 데모A
            </Right>
        </Wrapper>
    </>
)


export default DemoA;