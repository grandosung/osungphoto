import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const Container = styled.div`
    display:inline-flex;
    width:${props => props.width};
    height:${props => (props.height ? props.height : '32px' ) };
    margin: 1.5px 6px 1.5px 6px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(0, 0, 0, 0.5); }
   
`
const Input = styled.input`
    width:100%;
    height:100%;
`

const Required = styled.div`
    color:aqua;
    margin-left:1px;
    padding-top: 7px;
`

const StyledInput =({text,width,height,required,type, ...props })=>(
    <Container width={width} height={height}>
        <Input type={type ?  type : "input"}  placeholder={text} {...props} />
        {required ? <Required>*</Required> : null} 
    </Container>
);

// Input.propTypes = {
//     text: PropTypes.string.isRequired
// };

export default StyledInput;