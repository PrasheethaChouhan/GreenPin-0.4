import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen'
import CardsScreen from '../screens/CardsScreen';
import ChatScreen from '../screens/ChatScreen';


export const AppTabNavigator = createBottomTabNavigator({
    HomeScreen: {screen: HomeScreen},
    CardsScreen: {screen: CardsScreen},
    ChatScreen: {screen: ChatScreen},
  },
  {
    defaultNavigationOptions: ({navigation})=>({
      tabBarIcon: ()=>{
        const routeName = navigation.state.routeName;
        if(routeName === "HomeScreen"){
          return(
            <Image
            source={require("../assets/home-icon.png")}
            style={{width:20, height:20}}
          />
          )

        }
        else if(routeName === "CardsScreen"){
          return(
            <Image
            source={require("../assets/chat-icon.png")}
            style={{width:20, height:20,}}
          />)

        }
        else if(routeName === "ChatScreen"){
          return(
            <Image
            source={require("../assets/chat-icon.png")}
            style={{width:20, height:20,}}/>)
          }
      }
    })
  }
);