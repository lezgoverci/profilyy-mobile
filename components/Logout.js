import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Logout extends Component{

    static navigationOptions = {
        drawerLabel: 'Logout',
      };

    handleLogout(e){
        e.preventDefault();
        this.removeToken().then(
            this.props.navigation.navigate('Welcome')
        )
    }

    removeToken = async () => {
        try {
            await AsyncStorage.removeItem('access_token')
        } catch(e) {
            // remove error
        }
        
        console.log('Done.')
    }

    render(){
        return(
            <View>
                <Text>Logout</Text>
                <Button
                    style={{paddingTop: 20 }}
                    onPress={(e) => { this.handleLogout(e)}}
                    title="Logout" 
                />
                <Button onPress={() => {this.props.navigation.openDrawer()}} title="Drawer" />
            </View>
        )
    }
}

export default Logout;