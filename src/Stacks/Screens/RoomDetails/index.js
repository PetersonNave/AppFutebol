import React, { Component,useState, useEffect  } from "react";
import styled from "styled-components";
import { Container } from "./styles";
import { Text, BackHandler, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";
import Stars from "../../../components/Stars";
import RoomDetails from '../../../components/RoomDetails'
import Api from '../../../Api';
import AsyncStorage from "@react-native-async-storage/async-storage";

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
const CreateRoomButton = styled.TouchableOpacity`
    border: 0.5px solid #4EBE70;
    height: 67px;
    border-radius: 10px;
    background-color: #08E659;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: -10px;

`;

const CreateRoomButtonText = styled.Text`
    font-size: 35px;
    color: #FFFFFF;
    font-weight: bold;


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
export const BackgroundImage = styled.Image`

width: 100%;
height: 300px;
margin-bottom: -50px;
opacity: 0.5;
`;




export default({route})=> {
    const [loading, setLoading] = useState(false);
    const [TList, setTList] = useState([]);
    navigation = useNavigation('');
    useEffect(()=>{

        ListDetailsMap();
       

        const backAction = () => {
            navigation.reset({
                routes:[{name:'Home'}]
            
            });
            return true;
          };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );
          return () => backHandler.remove();
    }, []);

    navigation = useNavigation();
     
    let List = [];
    const ListDetailsMap= async () =>{

    
    let res = await Api.getDetails(route.params?.data.id);
   
    List = res;
    setTList(List);
    setLoading(true);
    return;
}
if(loading){
    console.log(TList);

}




return(
 
 

<Container>
<BackgroundImage source={route.params?.data.avatar}/>
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
{loading && 
<ListArea >

            {TList.map((item, k)=>(
                <RoomDetails key={k} data={item} />

            ))}
        </ListArea>
            }

</Scroller>
<CreateRoomButton >
        <CreateRoomButtonText>Criar uma Sala</CreateRoomButtonText>
    </CreateRoomButton>

</Area>
</Container>

)

}
