import React, { Component} from 'react';
import Stars from './Stars'
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    height: 117px;
    border-radius: 20px;
    margin-bottom: 20px;
    padding:15px;
    flex-direction: row;

`;

const Avatar = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
    borderColor: #000000;
    borderWidth: 0.7px;

`;

const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
    align-items: center;
`;

const UserName = styled.Text`
    font-size: 17px;
    font-weight: bold;

`;

const SeeProfileButton = styled.View`
    width: 85px;
    height: 26px;
    border: 1px solid #4EADBE;
    border-radius: 10px;
    justify-content: center;
    align-items: center;


`;

const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #268596;
`;


export default ({data, list}) =>{

const teste = async () => {
 navigation.navigate('RoomDetails', {data, list});
  

}

const navigation = useNavigation();    

return(
<Area onPress={()=>teste()}>
    <Avatar source={data.avatar}/> 

   <InfoArea  >
       <UserName>{data.name}</UserName>
    <Stars stars={data.stars}/>
    <SeeProfileButton >
        <SeeProfileButtonText>Ver jogos</SeeProfileButtonText>
    </SeeProfileButton>

   </InfoArea>
</Area>


);

}