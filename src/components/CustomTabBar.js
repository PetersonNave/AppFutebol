import React, { Component} from 'react';
import styled from 'styled-components';

 import HomeIcon from '../assets/home.svg'
 import SearchIcon from '../assets/search.svg'
 import FavoriteIcon from '../assets/favorite.svg'
 import AccountIcon from '../assets/account.svg'
 import TodayIcon from '../assets/TodayBall.svg'
 import FavoriteFullIcon from '../assets/favorite_full.svg'

import Appointments from '../Stacks/Screens/Appointments';
import Home from '../Stacks/Screens/Home';

const TabArea = styled.View`
    background-color: #08E659;
    height: 60px;
    flex-direction: row;
    border: 1px solid #4EBE70;

`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;

`;
const TabItemCenter = styled.TouchableOpacity`
    width: 70px;
    height: 70px;
    background-color: #FFFFFF;
    justify-content: center;
    align-items: center;
    border-radius: 35px;
    border: 3px solid #4EBE70;
    margin-top: -20px;

`;

export default({state, navigation})=> {

    const goTO=(screenName) =>{

        navigation.navigate(screenName)

    }

    return(
<TabArea>
    <TabItem onPress={() => goTO('Home') }>
          <HomeIcon style={{opacity: state.index===0? 1 : 0.7}} width="24px" height="24px" fill="#FFFFFF"  />
    </TabItem>
    <TabItem onPress={() => goTO('Search') }>
          <SearchIcon style={{opacity: state.index===1? 1 : 0.7}} width="24px" height="24px" fill="#FFFFFF"  />
    </TabItem>
    <TabItemCenter onPress={() => goTO('Appointments') }>
          <TodayIcon style={{opacity: state.index===2? 1 : 0.8}} width="49px" height="49px" fill="#08E659"  />
    </TabItemCenter>
    <TabItem onPress={() => goTO('Favorites') }>
        {state.index === 3?
         <FavoriteFullIcon width="24px" height="24px" fill="#FFFFFF" />
         :
         <FavoriteIcon opacity="0.7" width="24px" height="24px" fill="#FFFFFF" />
        
    }
         
    </TabItem>
    <TabItem onPress={() => goTO('Profile') }>
          <AccountIcon style={{opacity: state.index===4? 1 : 0.7}} width="24px" height="24px" fill="#FFFFFF"  />
    </TabItem>
</TabArea>
    );


}



;