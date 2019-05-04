import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';


class ProfilePhoto extends Component{
    static navigationOptions = {
        headerTitle: 'Profile Photo',
      };
    render(){
        return(
            <View>
                <Text>Profile Photo</Text>
            </View>
        )
    }
}

export default ProfilePhoto;