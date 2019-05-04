import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';


class Profile extends Component{

    static navigationOptions = {
        drawerLabel: 'Profile',
      };

    render(){
        return(
            <View>
                <Text>Profile</Text>
                
                <Button onPress={() => {this.props.navigation.openDrawer()}} title="Drawer" />
            </View>
        )
    }
}

export default Profile;