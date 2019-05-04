import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';


class ProfilePhoto extends Component{

    static navigationOptions = {
        drawerLabel: 'Profile Photo',
      };



    render(){
        return(
            <View>
                <Text>Profile Photo</Text>
   
                <Button onPress={() => {this.props.navigation.openDrawer()}} title="Drawer" />
            </View>
        )
    }
}

export default ProfilePhoto;