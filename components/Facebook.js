import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';


class Facebook extends Component{

    static navigationOptions = {
        drawerLabel: 'Facebook',
      };

    render(){
        return(
            <View>
                <Text>Facebook</Text>
                
                <Button onPress={() => {this.props.navigation.openDrawer()}} title="Drawer" />
            </View>
        )
    }
}

export default Facebook;