import React from 'react';
import styled from "styled-components";
import StyledInput from '../../../Components/StyledInput';
import Button from '../../../Components/Button'
import Lang from '../../../Utils/Language';
import city from './city.png';

const Energy = styled.div`
    width:100%;
    
    margin:auto;
    height:800px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:40px;
    background-image: url(${city});
    background-size:cover;
    background-repeat:no-repeat;
 
    
`

const Assi = styled.div`
    width:auto;
    display:flex;
    background-color:${props => props.color};
    align-items:center;
    
`
const Left = styled.div`
    width:110px;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 14px;
    color:white;
    background-color: ${props => props.theme.blackOpacity};
    font-weight: 600;
    border-radius: ${props => props.theme.borderRadius};


`
const Right = styled.div`
    width:700px;
    height:auto;
    display:inline-flex;
    flex-direction:column;
`


const Bar = styled.div`
    width:auto;
    widht:${props => props.width};
    height:auto;
    display :inline-flex;
    align-items:center;
    margin:5px 0 5px 0;
    border:solid 1px red;
`

const Cells = styled.div`
    display: inline-grid;
    width:100%;
    height:auto;
    grid-template-columns:  1.2fr, 8.1fr;
    grid-template-rows:  100px 100px;
    grid-gap: 0px;
    
   
`


const Picker = styled.input`


`//페이지 숫자 






export default ({name,email,pw,phone,file,values,address,date,ok}) => (
    <Energy>    
        <Bar>
            <Left>{Lang.texts['name']}</Left>
            <Right><StyledInput onChange={name.onChange} width={'180px'} required /></Right>
        </Bar>
        <Bar>
            <Left>{Lang.texts['pw']}</Left>
            <Right><StyledInput onChange={pw.onChange}  width={'180px'} required /></Right>
        </Bar>
        <Bar>
            <Left>{Lang.texts['email']}</Left>
            <Right><StyledInput onChange={email.onChange}  width={'240px'} required /></Right>
        </Bar>
        <Bar>
            <Left>{Lang.texts['number']}</Left>
            <Right><StyledInput onChange={phone.onChange} width={'240px'} required /></Right>
        </Bar>
        <Bar>
            <Left>{Lang.texts['address']}</Left>   
            <Right>
                <Assi>
                    <StyledInput width={'180px'} required />
                    <Button text={Lang.texts['findaddress']} width={'60px'}/>
                </Assi>
                <StyledInput width={'300px'}  />
                <StyledInput width={'300px'}  />
            </Right>
        </Bar>
        <Bar>
            <Left>{Lang.texts['wantday']}</Left>    
            <Right> <StyledInput type={"Date"} onChange={date.onChange} width={'180px'} required max="1979-12-31" /></Right>
        </Bar>
        <Bar>
            <Left>{Lang.texts['file']}</Left> 
            <Right> 
                <Assi>
                    <StyledInput placeholder={file.value} disabled width={220} />
                    <input onChange={file.onChange} type="file"/>   
                </Assi>    
                
            </Right>
        </Bar>
        <Bar>
            <Left>{Lang.texts['value']}</Left> 
            <Right><StyledInput onChange={values.onChange} height={'270px'}/></Right>
        </Bar>
        <Bar>
            <Left><Button onClick={ok} text={"ok"} ></Button></Left>
            <Left><Button onCLick={()=>alert('no')} text={"no"}></Button></Left>
           
        </Bar>
    </Energy>
    
    
)


