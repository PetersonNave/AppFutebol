import React, { Component, useEffect, useContext} from 'react';
import {Container, LoadingIcon} from './styles';
import { useNavigation } from '@react-navigation/core';
import Api from '../../../Api'
import Logo from '../../../assets/icoFootPlayer.svg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../../contexts/UserContext';

// import PlayerLogo from '../../../assets/icoFootPlayer.svg';

export default () => {

  const {dispatch: userDispatch} = useContext(UserContext);

const navigation = useNavigation();
    useEffect(()=>{

        const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        
        if(token){
        //validar token
          let res = await Api.checkToken(token);
          if(res.token){

            await AsyncStorage.setItem('token', res.token);

            userDispatch({
            
             type: 'SET_AVATAR',
             payload: {avatar: res.data.avatar}
            
            });
            navigation.reset({
                routes:[{name:'MainTab'}]
            });
            



          }else{
            navigation.navigate('SignIn')
          }


        }else{
          
          navigation.navigate('SignIn')
        }
        
        }
        checkToken();
        
        }, []);

    return(
 

    <Container>
   
    {/* <PlayerLogo width="100%" height="160"/> */}

    <Logo weight="100%" height="150px" fill="#FFFFFF"/>
    <LoadingIcon color="#FFFFFF" size="large"/>


    </Container>
    );
}