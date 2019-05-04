import React, {Component} from 'react';
import {Text, View, ActivityIndicator,  StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


class Welcome extends Component{
    constructor(props){
        super(props);
        this.state = {isAuthenticated: null};
        this._checkAuth();
    }

    _checkAuth = async () =>{
        try{
            const value = await AsyncStorage.getItem('access_token');
            if(value !== null){
                this.props.navigation.navigate('Profile');
            }else{
                this.props.navigation.navigate('Login',{
                    access_token: value
                });
            }
        }catch(e){
            console.log(e);
        }
    }

    render(){
        return(
            <View>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}

export default Welcome;