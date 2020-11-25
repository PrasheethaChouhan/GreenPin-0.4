import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginAndSignupPage from './screens/LoginAndSignupPage';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import PlantATree from './screens/PlantATree';
import HomeScreen from './screens/HomeScreen'
export default function App() {
  return (
    <AppContainer />
  );
}



const switchNavigator = createSwitchNavigator({
  LoginAndSignupPage:{screen: LoginAndSignupPage},
  AppDrawerNavigator:{screen: AppDrawerNavigator},
  HomeScreen:{screen: HomeScreen},
  PlantATree:{screen:PlantATree}
})

const AppContainer =  createAppContainer(switchNavigator);
