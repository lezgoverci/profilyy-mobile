import React, {Component} from 'react';
import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';


import WelcomeScreen from './components/public/Welcome';
import LoginScreen from './components/public/Login';
import RegisterScreen from './components/public/Register';
import ProfileScreen from './components/public/Profile';

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

const AppStackNavigator = createStackNavigator({
  Profile: ProfileScreen
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: WelcomeScreen,
  Auth: AuthStackNavigator,
  App: AppStackNavigator
},{
  initialRouteName: 'Welcome'
});

const AppContainer = createAppContainer(AppSwitchNavigator);
