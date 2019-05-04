import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';


class Notification extends Component{

    static navigationOptions = {
        drawerLabel: 'Notification',
      };



    render(){
        return(
            <View>
                <Text>Notification</Text>
   
                <Button onPress={() => {this.props.navigation.openDrawer()}} title="Drawer" />
            </View>
        )
    }
}

export default Notification;