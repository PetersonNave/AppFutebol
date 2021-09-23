import React, { Component} from 'react';
import styled from 'styled-components';
import { ReactSVG  } from 'react-native-svg';


export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: #63D180;
justify-content: center;

`;

export const InputArea = styled.View`

padding: 40px;
width: 100%;

`;

export const CustomButton = styled.TouchableOpacity`

height: 60px;
background-color: #2AD22A;
justify-content: center;
border-radius: 30px;
align-items: center;

`;

export const CustomButtonText = styled.Text`
font-size: 18px;
color: #FFF;

`;

export const SignMessagemButton = styled.TouchableOpacity`
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 50px;
margin-bottom: 20px;

`;
export const SignMessagemButtonText = styled.Text`
font-size: 16px;
color: #FFFFFF;

`;
export const SignMessagemButtonTextBold = styled.Text`

font-size: 16px;
color: #FFFFFF;
font-weight: bold;
margin-left: 5px;

`;



// Container,
// InputArea,
// CustomButton,
// CustomButtonText,
// SignMessagemButton,
// SignMessagemButtonText,
// SignMessagemButtonTextBold