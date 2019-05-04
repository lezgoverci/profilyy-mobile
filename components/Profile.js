import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';


class Profile extends Component{

    static navigationOptions = {
        headerTitle: 'Profile',
      };

    render(){
        return(
            <View>
                <Text>Profile</Text>  
          </View>
        )
    }
}

export default Profile;