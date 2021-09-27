import React, { Component} from 'react';
import styled from 'styled-components';
import { ReactSVG  } from 'react-native-svg';

export const Container = styled.SafeAreaView`


flex: 1;
background-color: #63D180;

`;

export const Scroller = styled.ScrollView`
 flex: 1;
 padding: 20px;
 margin-top: 25px;
`;

export const HeaderArea = styled.View`
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`;

export const HeaderTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;
    color: #FFFFFF;
    width: 250px;
`;

export const SearchButton = styled.TouchableOpacity`

`;

export const LocationArea = styled.View`
    background-color: #08E659;
    border-radius: 30px;
    height: 60px;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 30px;
`;

export const LocationInput = styled.TextInput`
    flex:1;
    font-size: 16px;
    color: #FFF;
`;

export const LocationFinder = styled.TouchableOpacity`
    height: 24px;
    width : 24px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;

`;

// Container,
// Scroller,

// HeaderArea,
// HeaderTitle,
// SearchButton,

// LocationArea,
// LocationInput,
// LocationFinder