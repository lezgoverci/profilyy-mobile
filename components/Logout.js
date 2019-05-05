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
        const keys = ['access_token','user_id','account_data'];
        try {
            await AsyncStorage.multiRemove(keys)
        } catch(e) {
            // remove error
        }
        
        console.log('Done.')
    }

    render(){
        return(
            <View style={{padding:15}}>
                <Text>Click the button below to logout</Text>
                <View style={{marginTop: 20 }}>
                    <Button
                        onPress={(e) => { this.handleLogout(e)}}
                        title="Logout" 
                    />
                </View>
            </View>
        )
    }
}

export default Logout;