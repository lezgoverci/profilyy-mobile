import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';


class Settings extends Component{
    static navigationOptions = {
        headerTitle: 'Settings',
      };
    render(){
        return(
            <View>
                <Text>Settings</Text>
            </View>
        )
    }
}

export default Settings;