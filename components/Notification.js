import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';


class Notification extends Component{
    static navigationOptions = {
        headerTitle: 'Notifications',
      };
    render(){
        return(
            <View>
                <Text>Notification</Text>
            </View>
        )
    }
}

export default Notification;