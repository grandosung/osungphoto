import React from 'react';
import styled from "styled-components";
import leaf from './leaf.png'
import Iframe from 'react-iframe';

const Energy = styled.div`
    width:100%;
    height:700px;
    display:flex;
    flex-direction:column;
    background-color:${props => props.theme.lightWhiteColor};
    
`

const Cell = styled.div`
    width:100%;
    height:100%;
    border:solid 1px grey;
    gird-area:cell;
    background-color:${props => props.color};

    
`

const Cells = styled.div`
    display:grid;
    width:100%;
    grid-template-columns: 1.2fr  8fr;
    grid-template-rows:  40px 40px;
    grid-gap: 0px;
    margin:40px 0 20px 0;

`


export default () => (
    <Energy>
        <Cells>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>

            <Cell></Cell>
          

        </Cells>
        <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.9230561860577!2d126.84255031547215!3d37.32065024592888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6f17b1037387%3A0x1ef31e54e7885882!2z7Iqk7YOA7ZSE65287J6Q!5e0!3m2!1sko!2skr!4v1567675107618!5m2!1sko!2skr"
                height="1800px"
           />
        
    </Energy>
    
    
)


