import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';


class Facebook extends Component{
    static navigationOptions = {
        headerTitle: 'Facebook',
      };
    render(){
        return(
            <View>
                <Text>Facebook</Text>
            </View>
        )
    }
}

export default Facebook;