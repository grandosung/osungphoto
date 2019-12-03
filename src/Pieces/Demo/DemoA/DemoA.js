import React,{useState,useEffect} from 'react';
import styled, { keyframes,ServerStyleSheet, StyleSheetManager } from "styled-components";
import {findAll,find }from 'styled-components-test-utils'
import c9 from './c9.jpg';
import c1 from './c1.jpg';
import jview from './jview.jpg';
import sakura from './sakura.jpg'
import Lang from '../../../Utils/Language'
import BackgroundSlider from 'react-background-slider'
import { declareExportAllDeclaration } from '@babel/types';



const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display:grid;
    grid-template-columns: 2.3fr  8fr;
    grid-template-rows:  100vh 100vh;
`


const Left = styled.div`
    grid-column:1;
    grid-row:1;
    padding-top:74px;
    display:flex;
    min-width:340px;
    flex-direction:column;
    align-items:center;
`

const Sidepic = styled.div`
    width: 30vh;
    height:28vh;
    overflow:hidden;
    border:solid 2px red;
    margin-bottom:30px;
    margin-left:22px;
    transition: transform 12s;
    img{
        width:100%;
        height:100%;
        transition: transform .5s ease;
    } 
    &:hover img{
        transform: scale(1.2)
    }
   


`
const change = keyframes`
    from {opacity: .6}
    to {opacity: .99}
`

const Right= styled.div`
    min-width:700px;
    grid-column:2;
    grid-row:1;
    border:solid 1px blue;
    background-image: url(${props => props.back});
    background-size:cover;
    background-repeat:no-repeat;
    z-index:3000;
   

`


const LeftText = styled.div`
    position:relative;
    margin:auto;
    bottom:80px;
    color:white;
    text-align:center;
    
`

const Rmg = styled.img`
    width:100%;
    height:100%;
    z-index:1000;
    animation:${change} 1.5s;
`
const blist = [c9,jview,sakura]



const DemoA=() => {
    
    //     const [B,Bchange] = useState(0);
    var slideIndex = 0;

    var j = document.getElementsByClassName("Rmg") 
    useEffect(()=>{
        showSlides();
    },[j])

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("Rmg");
      console.log(slides.length)
     if(slides[0]){   
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 5000); // Change image every 2 seconds
     }
    }


    return(
    <>    
        <Wrapper>
            <Left>
                <Sidepic>
                    <img  src={c9}/>
                    <LeftText>
                         PEOPLE<br/><br/>
                         {Lang.texts.people}
                    </LeftText>

                </Sidepic>
                <Sidepic>
                    <img src={c9}/>
                    <LeftText>
                        NATURE<br/><br/>
                        {Lang.texts.nature}
                    </LeftText>
                </Sidepic>
                <Sidepic>
                
                    <img src={c9}/>
                    <LeftText>
                        NIGHT<br/><br/>
                        {Lang.texts.night_view}
                    </LeftText>

                </Sidepic>
            </Left>
            <Right>
                <Rmg className="Rmg" src={jview}/> 
                <Rmg className="Rmg" src={c9} />
                <Rmg className="Rmg" src={c1}  />

                
            </Right>
        </Wrapper>
    </>
    )
}


export default DemoA;