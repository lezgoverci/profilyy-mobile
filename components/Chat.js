import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';


class Chat extends Component{

    static navigationOptions = {
        drawerLabel: 'Chat',
      };

    render(){
        return(
            <View>
                <Text>Chat</Text>
                
                <Button onPress={() => {this.props.navigation.openDrawer()}} title="Drawer" />
            </View>
        )
    }
}

export default Chat;