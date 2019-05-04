import React, {Component} from 'react';
import {createSwitchNavigator, createStackNavigator, createDrawerNavigator, createAppContainer} from 'react-navigation';


import WelcomeScreen from './components/public/Welcome';
import LoginScreen from './components/public/Login';
import RegisterScreen from './components/public/Register';
import ProfileScreen from './components/Profile';
import NotificationScreen from './components/Notification';
import LogoutScreen from './components/Logout';
import ProfilePhotoScreen from './components/ProfilePhoto';
import FacebookScreen from './components/Facebook';
import ChatScreen from './components/Chat';

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AuthStackNavigator = createStackNavigator({
  Register: {screen: RegisterScreen},
  Login:{screen: LoginScreen},
},{
  initialRouteName: 'Login'
});


const AppDrawerNavigator = createDrawerNavigator({
  Profile: ProfileScreen,
  Notification: NotificationScreen,
  ProfilePhoto: ProfilePhotoScreen,
  Facebook: FacebookScreen,
  Chat: ChatScreen,
  Logout: LogoutScreen
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
},{
  initialRouteName: 'Welcome'
});

const AppContainer = createAppContainer(AppSwitchNavigator);
