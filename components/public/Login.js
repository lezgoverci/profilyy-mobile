import React, {Component} from 'react';
import {TextInput, View, Button, Alert, ToastAndroid, Text, ScrollView} from 'react-native';
import {url as appUrl} from '../../global.json';
import AsyncStorage from '@react-native-community/async-storage';
class Login extends Component{

    constructor(props){
        super(props);
        this.state = {email:"", password:"", access_token:"", user_id:""};
    }

    componentDidMount(){
        this.setState({access_token: this.props.navigation.getParam('access_token', null)})
    }

    handleLogin(e){
        e.preventDefault();
        if(this.state.access_token == null){
            fetch(appUrl + "/api/authenticate",{
                'method' : 'POST',
                'headers' : {'Content-type': 'application/json'},
                'body': JSON.stringify({
                    'email': this.state.email,
                    'password': this.state.password,
                    'access_token' : this.state.access_token
                })
            }).then(res => res.json())
            .then(response => {
                console.log(response);
                this.setState({
                    access_token: response.access_token,
                    user_id: response.data.id
                });
               this.storeData('access_token',this.state.access_token);
                this.storeData('user_id',this.state.user_id + "");
                
                this.props.navigation.navigate('Welcome');
            })
        }else{
            fetch(appUrl+"/api/login",{
                'method' : 'POST',
                'headers' : {'Content-type': 'application/json'},
                'body': JSON.stringify({
                    'email': this.state.email,
                    'password': this.state.password
                })
            }).then(
                res => res.json()
            ).then(response => {
                console.log(response);
                this.props.navigation.navigate('Welcome');
            })
        }
        
    }

    storeData = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value,()=>{
              AsyncStorage.getItem(key,(err,result)=>{
                  console.log(result);
              })
          })
        } catch (e) {
          console.log(e);
        }
      }

    render(){
        return(
            <ScrollView>
                <View style={{paddingRight: 30, paddingLeft: 30}}>
                <Text style={{marginTop:30}}>Email</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10}}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <Text style={{marginTop:10}}>Password</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10}}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <View  style={{paddingTop: 20 }}>
                    <Button
                        onPress={(e) => {this.handleLogin(e)}}
                        title="Submit"
                        
                        />
                </View>

                <View style={{paddingTop: 20 }}>
                    <Button
                        style={{paddingTop: 20 }}
                        onPress={(e) => { this.props.navigation.navigate('Register',{
                            access_token: this.state.access_token
                        })}}
                        title="Register" 
                    />
                </View>
                </View>
            </ScrollView>
        )
    }
}

export default Login;