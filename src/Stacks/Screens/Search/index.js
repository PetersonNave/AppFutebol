import React, { Component, useEffect, useContext} from 'react';
import {Container, LoadingIcon} from './styles';
import { useNavigation } from '@react-navigation/core';
import Api from '../../../Api'
import Logo from '../../../assets/icoFootPlayer.svg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../../contexts/UserContext';
import { Text } from 'react-native';

export default () => {

return(
<Container>

    <Text>Search</Text>

</Container>)

   

}