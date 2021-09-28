import React, { Component } from "react";
import styled from "styled-components";
import { Container } from "./styles";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Stars from "../../../components/Stars";
import BarberItem from '../../../components/BarberItems'
import { useState } from "react";

const NameArea = styled.View`
    background-color: #FFFFFF;
    height: 70px;
    border-top-left-radius: 50px;
    width: 100%;
    padding:15px;
    flex-direction: row;
    
    

`;
const Area = styled.View`
    background-color: #FFFFFF;
    height: 600px;
    border-top-left-radius: 50px;
    width: 100%;
    padding:15px;
   
    

`;

const Avatar = styled.Image`
    width: 110px;
    height: 110px;
    border-radius: 20px;
    borderColor: #4EBE70;
    borderWidth: 0.7px;
    margin-top:-70px;
    margin-left:15px;

`;

const InfoArea = styled.View`
    margin-left: -1px;
    margin-top: -35px;
    padding:15px;

    
`;

const UserName = styled.Text`
    font-size: 24px;
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

const SeeRoomsText = styled.Text`
    font-size: 18px;
    color: #000000;
    font-weight: bold;
`;

export const Scroller = styled.ScrollView`
 flex: 1;
 padding: 20px;
 margin-top: 25px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;

`;




export default({route})=> {

    navigation = useNavigation();
console.log(route);
const list =route.params?.list;

return(
 
 

<Container>

<Area>
<NameArea>
<Avatar source={route.params?.data.avatar}/> 
<InfoArea  >
       <UserName>{route.params?.data.name}</UserName>
    <Stars stars={route.params?.data.stars}/>
    

   </InfoArea>





</NameArea>

<SeeRoomsText>Salas disponíveis</SeeRoomsText>

<Scroller>

<ListArea >
            {list.map((item, k)=>(
                <BarberItem key={k} data={item} />

            ))}
        </ListArea>


</Scroller>


</Area>
</Container>

)

}
