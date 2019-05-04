import React, {Component} from 'react';
import {TextInput, View, Picker, Text, ScrollView, Button, ToastAndroid} from 'react-native';
import {url as appUrl} from '../../global.json';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from "react-native-vector-icons/Ionicons";

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            fname : "",
            lname: "",
            address: "",
            email: "",
            phone : "",
            gender: "",
            password: "",
            access_token: "",
        };
    }

    componentDidMount(){
        this.setState({access_token: this.props.navigation.getParam('access_token', null)})
    }

    handleRegister(e){
        e.preventDefault();

        fetch(appUrl + "/api/register",{
            'method':'POST',
            'headers': {'Content-type':'application/json'},
            'body': JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        }).then(res => res.json())
        .then(response => {
            if(response.access_token != null){
                this.setState({access_token: response.access_token});
                this.storeToken();

                fetch(appUrl + "/api/account",{
                    'method' : 'POST',
                    'headers' : {'Content-type':'application/json'},
                    'body' : JSON.stringify({
                        fname: this.state.fname,
                        lname: this.state.lname,
                        address: this.state.address,
                        phone: this.state.phone,
                        gender: this.state.gender,
                        api_token: this.state.access_token
                    })
                }).then(res => res.json())
                .then(response  => {
                    if(response.data != null){
                        if(response.data != null){
                            ToastAndroid.show("Account created", ToastAndroid.SHORT);
                            this.props.navigation.navigate('Welcome');
                        }
                    }
                })
            }
            
        })
        
    }

    storeToken = async () => {
        try {
          await AsyncStorage.setItem('access_token', this.state.access_token)
        } catch (e) {
          console.log(e);
        }
      }

    render(){
        return(
            <ScrollView >
                <View style={{paddingRight:30, paddingLeft:30, paddingBottom:60}} >
                    <Icon name="md-arrow-back" size={30} onPress={() => this.props.navigation.navigate('Login')}/>
                    <Text style={{marginTop:30}}>First name</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10}}
                        onChangeText={(fname) => this.setState({fname})}
                        value={this.state.fname}
                    />
                    <Text style={{marginTop: 30}}>Last name</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10}}
                        onChangeText={(lname) => this.setState({lname})}
                        value={this.state.lname}
                    />
                    <Text style={{marginTop: 30}}>Address</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10}}
                        onChangeText={(address) => this.setState({address})}
                        value={this.state.address}
                    />
                    <Text style={{marginTop: 30}}>Phone</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10}}
                        onChangeText={(phone) => this.setState({phone})}
                        value={this.state.phone}
                    />
                    <Text style={{marginTop: 30}}>Gender</Text>
                    <Picker
                        selectedValue={this.state.gender}
                        style={{height: 50, marginTop:10}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({gender: itemValue})
                        }>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker>
                    <Text style={{marginTop: 30}}>Email</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10}}
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    />
                    <Text style={{marginTop: 30}}>Password</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10}}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />
                    <View style={{paddingTop: 20 }}>
                        <Button
                            style={{paddingTop: 20 }}
                            onPress={(e) => { this.handleRegister(e)}}
                            title="Submit" 
                        />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Register;