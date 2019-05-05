import React, {Component} from 'react';
import {createSwitchNavigator, createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation';
import Icon from "react-native-vector-icons/Ionicons";

import WelcomeScreen from './components/public/Welcome';
import LoginScreen from './components/public/Login';
import RegisterScreen from './components/public/Register';
import ProfileScreen from './components/Profile';
import NotificationScreen from './components/Notification';
import LogoutScreen from './components/Logout';
import ProfilePhotoScreen from './components/ProfilePhoto';
import EditPhotoScreen from './components/EditPhoto';
import FacebookScreen from './components/Facebook';
import ChatScreen from './components/Chat';
import SettingsScreen from './components/Settings';

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const ProfileStackNavigator = createStackNavigator({
  Profile: ProfileScreen
},{
  defaultNavigationOptions: ({navigation}) =>{
    return {
      headerLeft: <Icon name="md-menu" style={{paddingLeft:15}} size={30} onPress={() => {navigation.openDrawer()}}/>
    }
  },navigationOptions : ({navigation}) => {
    //const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      drawerLabel: 'Profile'
    }
  }
});

const NotificationStackNavigator = createStackNavigator({
  Notification: NotificationScreen
},{
  defaultNavigationOptions: ({navigation}) =>{
    return {
      headerLeft: <Icon name="md-menu" style={{paddingLeft:15}} size={30} onPress={() => {navigation.openDrawer()}}/>
    }
  },navigationOptions :  {
    drawerLabel: 'Notifications',
  }
});

const ProfilePhotoStackNavigator = createStackNavigator({
  ProfilePhoto: ProfilePhotoScreen,
  EditPhoto: EditPhotoScreen
},{
  defaultNavigationOptions: ({navigation}) =>{
    return {
      headerLeft: <Icon name="md-menu" style={{paddingLeft:15}} size={30} onPress={() => {navigation.openDrawer()}}/>
    }
  },navigationOptions :  {
    drawerLabel: 'Profile Photo',
  }
});

const FacebookStackNavigator = createStackNavigator({
  Facebook: FacebookScreen
},{
  defaultNavigationOptions: ({navigation}) =>{
    return {
      headerLeft: <Icon name="md-menu" style={{paddingLeft:15}} size={30} onPress={() => {navigation.openDrawer()}}/>
    }
  },navigationOptions :  {
    drawerLabel: 'Facebook',
  }
});

const ChatStackNavigator = createStackNavigator({
  Chat: ChatScreen
},{
  defaultNavigationOptions: ({navigation}) =>{
    return {
      headerLeft: <Icon name="md-menu" style={{paddingLeft:15}} size={30} onPress={() => {navigation.openDrawer()}}/>
    }
  },navigationOptions :  {
    drawerLabel: 'Chat',
  }
});

const SettingsStackNavigator = createStackNavigator({
  Settings: SettingsScreen
},{
  defaultNavigationOptions: ({navigation}) =>{
    return {
      headerLeft: <Icon name="md-menu" style={{paddingLeft:15}} size={30} onPress={() => {navigation.openDrawer()}}/>
    }
  },navigationOptions :  {
    drawerLabel: 'Settings',
  }
});

const LogoutStackNavigator = createStackNavigator({
  Logout: LogoutScreen
},{
  defaultNavigationOptions: ({navigation}) =>{
    return {
      headerLeft: <Icon name="md-menu" style={{paddingLeft:15}} size={30} onPress={() => {navigation.openDrawer()}}/>
    }
  },navigationOptions :  {
    drawerLabel: 'Logout',
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  ProfileStack: ProfileStackNavigator,
  NotificationStack: NotificationStackNavigator,
  ProfilePhotoStack: ProfilePhotoStackNavigator,
  FacebookStack: FacebookStackNavigator,
  ChatStack: ChatStackNavigator,
  SettingsStack: SettingsStackNavigator,
  LogoutStack: LogoutStackNavigator
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Login: LoginScreen,
  Register: RegisterScreen,
  App: AppDrawerNavigator
},{
  initialRouteName: 'Welcome'
});

const AppContainer = createAppContainer(AppSwitchNavigator);
