import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Logout extends Component{
    static navigationOptions = {
        headerTitle: 'Logout',
      };
    handleLogout(e){
        e.preventDefault();
        this.removeToken().then(
            this.props.navigation.navigate('Welcome')
        )
    }

    removeToken = async () => {
        const keys = ['access_token','user_id'];
        try {
            await AsyncStorage.multiRemove(keys)
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
            </View>
        )
    }
}

export default Logout;