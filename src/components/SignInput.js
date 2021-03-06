import React, { Component} from 'react';
import styled from 'styled-components';

const InputArea = styled.View`
width: 100%;
height: 60px;
background-color: #08E659;
flex-direction: row;
border-radius: 30px;
padding-left: 15px;
align-items: center;
margin-bottom: 15px

`;

const Input = styled.TextInput`

flex: 1;
font-size: 16px;
color: #FFFFFF;
margin-left: 10px;

`;

export default({placeholder, IconSVG, value, onChangeText, password}) => {



return(
<InputArea>
<IconSVG  weight="24px" height="24px"  fill="#FFFFFF"/>
 <Input 
    placeholder={placeholder}
    placeholderTextColor="#FFFFFF"
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={password}
 />
</InputArea>


);

}