import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

const Container = styled.button`
    width: ${props => (props.width ? props.width : 'auto' )};
    height:30px;
    border: 0;
    border-radius: ${props => props.theme.borderRadius};
    background-color: ${props => props.theme.blueColor};
    text-align: center;
    padding: 7px 0px;
    font-size: 14px;
    color: white;
    font-weight: 600;
    cursor: pointer;
`

const Button =({text,onClick,width})=>(
    <Container onClick={onClick} width={width} >{text}</Container>
);

Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button;