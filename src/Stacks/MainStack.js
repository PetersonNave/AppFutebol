import React, { Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from "./Screens/Preload";
import SignIn from "./Screens/SignIn";
import SignUp from "./Screens/SignUp";

const Stack = createStackNavigator();

export default ()=>{

    return(
<Stack.Navigator>
    <Stack.Screen name="Preload" component={Preload}/>
    <Stack.Screen name="SignIn" component={SignIn}/>
    <Stack.Screen name="SignUp" component={SignUp}/>
</Stack.Navigator>
    );

}