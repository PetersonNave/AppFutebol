import React, { Component, useEffect, useState, useContext} from 'react';
import { Alert, Platform } from 'react-native';
import RoomItems from '../../../components/RoomItems'
import {
    Container,
    Scroller,

    HeaderArea,
    HeaderTitle,
    SearchButton,

    LoadingIcon,

    LocationArea,
    LocationInput,
    LocationFinder,

    ListArea

} from './styles';
import { useNavigation } from '@react-navigation/core';
import Api from '../../../Api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../../contexts/UserContext';
import SearchIcon from '../../../assets/search.svg';
import MyLocationArea from '../../../assets/my_location.svg';


import * as Location from 'expo-location';


export default () => {

    const [coords, setCoords] = useState(null);
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    
    const handleLocationFinder = async () =>{
        setCoords(null);
       
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
        setLoading(true);
        setLocationText(' ')
        setList([]);

        let location = await Location.getCurrentPositionAsync({});
        setCoords(location.coords);
        let res = await Api.getRooms();
       
        
        if(res.loc == "Recife") {
            setLocationText(res.loc)
            console.log(res.data)
            setList(res.data);
            setLoading(false);

        }     else{alert("Erro ao buscar salas, verifique sua conexão com a internet e tente novamente")}
    } 
  
  //

    const navigation = useNavigation('');

    const [locationText, setLocationText] = useState();

useEffect(()=>{

    handleLocationFinder();

}, []);

return(
<Container>
    <Scroller>
        <HeaderArea>
             <HeaderTitle numberOfLines={2}>Boa tarde, Peterson! Que tal um fut hoje?</HeaderTitle>
             <SearchButton  onPress={()=>navigation.navigate('Search')} >
                 <SearchIcon height="26px" weight="26px" fill="#FFFFFF"/>
             </SearchButton>
        </HeaderArea>

        <LocationArea>
            <LocationInput
            placeholder="Onde você está?"
            placeholderTextColor="#FFFFFF"
            value={locationText}
            onChangeText={t=>setLocationText(t)}
            />
            <LocationFinder  onPress={handleLocationFinder} >
                <MyLocationArea height="24px" weight="24px" fill="#FFFFFF" />
            </LocationFinder>
        </LocationArea>

        {loading && <LoadingIcon size="large" color="#FFFFFF"/>}
       
        <ListArea >
            {list.map((item, k)=>(
                <RoomItems key={k} data={item} list={list} />

            ))}
        </ListArea>

    </Scroller>
    

</Container>)


   

}