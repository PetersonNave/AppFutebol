import React, { Component, useState} from 'react';
import Stars from './Stars';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import Api from '../Api';

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

const VacanciesFull = styled.Text`
    color: #FF0000;
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
    background-color: #2AD22A;
`;
const SeeProfileButton1 = styled.View`
  margin-right: 20px;
    width: 91px;
    height: 44px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
background-color: #E89643;
`;
const SeeProfileButtonFull = styled.View`
  margin-right: 20px;
    width: 91px;
    height: 44px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
background-color: #7D7D7D
`;


const SeeProfileButtonText = styled.Text`
    font-size: 14px;
    color: #FFFFFF;
`;
const NameAndHours = styled.View`

`;

export default (data) =>{
const [enter, useEnter] = useState(false)
const [vagas, useVagas] = useState("VAGA!")

const [vacations, useVacations] = useState(data.data.vacations);

const vacationText = async (vacationsN) => {
    if(vacationsN== 1){
        useVagas("VAGA!")
    }else if(vacationsN > 1)
    {
        useVagas("VAGAS!")
    }else{
        useVagas("LOTADA!")
    }

}
const teste = async () => {

    if(enter){
        alert("Você saiu da sala")
        useEnter(false);
        useVacations(vacations+1)
        vacationText(vacations+1);
    }else
    {
        if(vacations > 0){
            alert("Você está participando")
            useEnter(true);
            useVacations(vacations-1)
            vacationText(vacations-1);
        }else{

            alert("Sala lotada!")
        }
        
    }

   
    

}

useEffect(()=>{
    vacationText(vacations);
    
}, []);

const navigation = useNavigation();    

return(
<Area onPress={()=>teste()}>
   
   <InfoArea  >
       <NameAndHours>
           <RoomName>Fut de {data.data.name}</RoomName>
            <Hours>Horário: {data.data.Hour}</Hours>
       </NameAndHours>
      {vacations>0?
       <Vacancies>{vacations} {vagas}</Vacancies>
       :

     <VacanciesFull>{vagas}</VacanciesFull>
    
    
    }
      
       
    
        

       
    
    {enter?
       <SeeProfileButton1>
          <SeeProfileButtonText>Sair</SeeProfileButtonText>
        </SeeProfileButton1>
        :vacations>0?

        
        <SeeProfileButton>
        <SeeProfileButtonText>Participar</SeeProfileButtonText>
      </SeeProfileButton>
      :
      <SeeProfileButtonFull>
  <SeeProfileButtonText>Participar</SeeProfileButtonText>
</SeeProfileButtonFull> 


}


        
   

   </InfoArea>
</Area>


);

}