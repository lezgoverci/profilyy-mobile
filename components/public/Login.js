import React, {Component} from 'react';
import {TextInput, View} from 'react-native';
class Login extends Component{

    constructor(props){
        super(props);
        this.state = {username:"", password:""};
    }
    render(){
        return(
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                />

                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
            </View>
        )
    }
}

export default Login;