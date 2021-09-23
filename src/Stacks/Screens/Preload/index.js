import React, { Component, useEffect} from 'react';
import {Container, LoadingIcon} from './styles';
import { Text, AsyncStorage } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import Logo from '../../../assets/icoFootPlayer.svg'

// import PlayerLogo from '../../../assets/icoFootPlayer.svg';

export default () => {
const navigation = useNavigation();
    useEffect(()=>{

        const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        
        if(token){
        //validar token
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