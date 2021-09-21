import React, { Component} from 'react';
import styled from 'styled-components';
import { ReactSVG  } from 'react-native-svg';


export const Container = styled.SafeAreaView`
flex: 1;
align-items: center;
background-color: #63D180;
justify-content: center;

`;

export const LoadingIcon = styled.ActivityIndicator`

margin-top: 50px;

`;