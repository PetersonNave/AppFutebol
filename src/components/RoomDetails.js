import React, { Component} from 'react';
import Stars from './Stars'
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Area = styled.TouchableOpacity`
    border: 1px solid #000000;
    height: 67px;
    border-radius: 20px;
    margin-bottom: 15px;
    
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
`;


const InfoArea = styled.View`
    
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    margin-left: 10px;
    margin-right: 10px;
`;

const RoomName = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #63D180;

`;

const Hours = styled.Text`
    font-size: 14px;
    color: #63D180;

`;

const Vacancies = styled.Text`
    color: #E89643;
    font-size: 14px;
    margin-left:-30px;


`;

const SeeProfileButton = styled.View`
  margin-right: 20px;
    width: 91px;
    height: 44px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: #2AD22A

`;

const SeeProfileButtonText = styled.Text`
    font-size: 14px;
    color: #FFFFFF;
`;
const NameAndHours = styled.View`

`;

export default ({data, list}) =>{

const teste = async () => {
alert("Você está participando")
  

}

const navigation = useNavigation();    

return(
<Area onPress={()=>teste()}>
   
   <InfoArea  >
       <NameAndHours>
           <RoomName>Fut de Peterson</RoomName>
            <Hours>Horário: 16:30</Hours>
       </NameAndHours>
        <Vacancies>5 VAGAS!</Vacancies>

       
    <SeeProfileButton >
        <SeeProfileButtonText>Participar</SeeProfileButtonText>
    </SeeProfileButton>

   </InfoArea>
</Area>


);

}