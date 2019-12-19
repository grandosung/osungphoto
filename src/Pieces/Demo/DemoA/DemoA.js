import React,{useState,useEffect} from 'react';
import styled, { keyframes } from "styled-components";
import c9 from './c9.jpg';
import ch from './ch.PNG';
import ch2 from './ch2.PNG';
import hanabi from './hanabi.jpg';
import sakura from './sakura.jpg'
import jg from './jg.jpg'
import Lang from '../../../Utils/Language'



const Wrapper = styled.div`
    width:100%;
    height:100vh;
    display:grid;
    grid-template-columns: 2.3fr  8fr;
    grid-template-rows:  100vh 100vh;
    background-color:#d1dddb;
    z-index:4000;
`


const Left = styled.div`
    grid-column:1;
    grid-row:1;
    padding-top:74px;
    display:flex;
    min-width:340px;
    flex-direction:column;
    align-items:center;
    background-color:${props => props.theme.blackColor};
`

const LeftText = styled.div`
    position:relative;
    margin:auto;
    bottom:44px;
    font-weight:500;
    font-size:19pt;
    text-align:center;
    text-shadow: 1px 1px 1px aqua;
    opacity:0;
    
`


const Sidepic = styled.div`
    cursor:pointer;
    width: 32vh;
    height:28vh;
    border:solid 1px ${props => props.theme.lightWhiteColor};
    overflow:hidden;
    margin-bottom:30px;
    margin-left:22px;
    transition: transform 12s;
    img{
        width:100%;
        height:100%;
        transition: transform .5s ease;
    } 
    &:hover img{
        transform: scale(1.2);
        opacity:0.5
    }
    &:hover ${LeftText}{
        opacity:1;
    }
   


`
const change = keyframes`
    from {opacity: .6}
    to {opacity: 1}
`

const Right= styled.div`
    min-width:700px;
    grid-column:2;
    grid-row:1;
    z-index:3000;
   

`



const Rtext = styled.div`
    text-shadow: 6px 2px 2px black;
    width:1000px;
    opacity:1;
    z-index:4000;
    position:absolute;
    color:${props => props.theme.lightWhiteColor};
    top:410px;
    left:490px;
    font-size:75pt;
    font-weight:lighter;
    font-family: 'Bebas Neue', cursive;

`

const Rmg = styled.img`
    width:100%;
    height:100%;
    z-index:1000;
    opacity:1;
    animation:${change} 1.5s;
`



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
                    <img  src={ch2}/>
                    <LeftText>
                         PEOPLE<br/><br/>
                    </LeftText>

                </Sidepic>
                <Sidepic>
                    <img src={sakura}/>
                    <LeftText>
                        NATURE<br/><br/>
                    </LeftText>
                </Sidepic>
                <Sidepic>
                
                    <img src={hanabi}/>
                    <LeftText>
                        NIGHT-VIEW<br/><br/>
                    </LeftText>

                </Sidepic>
            </Left>
            <Right>

                <Rmg className="Rmg" src={ch}/> 
                <Rmg className="Rmg" src={jg} />
                <Rmg className="Rmg" src={c9}  />
            </Right>
        </Wrapper>
        <Rtext>
            <h1>BONTA KUN!</h1>
            <h2>Best OF Picture</h2>
        </Rtext>

         
    </>
    )
}


export default DemoA;