import React, { Component, useState, useContext} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Search from './Screens/Search';
import Appointments from './Screens/Appointments';
import Profile from './Screens/Profile';
import Favorites from './Screens/Favorites';
import CustomTabBar from '../components/CustomTabBar';
import RoomDetails from '../Stacks/Screens/RoomDetails'

const Tab = createBottomTabNavigator();

export default ()=>(

<Tab.Navigator tabBar={props=><CustomTabBar {... props}/>}
 initialRouteName="Home"
 screenOptions={{
     headerShown: false

 }}
>
   <Tab.Screen name="Home" component={Home}/>
   <Tab.Screen name="Search" component={Search}/>
   <Tab.Screen name="Appointments" component={Appointments}/>
   <Tab.Screen name="Favorites" component={Favorites}/>
   <Tab.Screen name="Profile" component={Profile}/>
   <Tab.Screen name="RoomDetails" component={RoomDetails}/>


</Tab.Navigator>



);


