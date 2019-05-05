import React, {Component} from 'react';
import {Button, View, Text, TextInput, Picker, ScrollView, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {url as appUrl} from '../global.json';

class Settings extends Component{
    static navigationOptions = {
        headerTitle: 'Settings',
      };

      constructor(props){
        super(props);
        this.state = {
            fname : "",
            lname: "",
            address: "",
            email: "",
            phone : "",
            gender: "male",
            facebook_username: "",
            password: "",
            access_token: "",
            user_id: "",
            account_id: "",
            photo:""
        };
    }

    componentDidMount(){
        this.getData("user_id").then(res =>{
            
            this.setState({user_id: res})
            
        });

        this.getData("account_id").then(res =>{
            
            this.setState({account_id: res})
            
        });

        this.getData("access_token").then(res =>{
                
            this.setState({access_token: res})
            
        })
        .then(()=>{
            console.log(this.state.access_token);
            console.log(this.state.user_id);
            console.log(this.state.account_id);
        })
        .then(()=>{
            this.updateScreen();

        })
    }

    updateScreen(){
        this.getData('account_data').then(res => {
            if(res != null){
                const data = JSON.parse(res); 
                this.setState({
                    fname: data.fname,
                    lname: data.lname,
                    address: data.address,
                    phone: data.phone,
                    gender: data.gender,
                    facebook_username: data.facebook_username,
                    photo: data.photo,
                    account_id: data.account_id
                })
            }else{
                fetch(appUrl + "/api/user/account",{
                    'method': 'POST',
                    'headers': {'Content-type':'application/json'},
                    'body': JSON.stringify({
                        'api_token': this.state.access_token,
                        'user_id': this.state.user_id,
                        'id': this.state.account_id
                    })
                })
                .then(res=> res.json())
                .then(response =>{
                    console.log(response);
                    if(response.data != null){
                        this.setState({
                            fname: response.data.fname,
                            lname: response.data.lname,
                            address: response.data.address,
                            phone: response.data.phone,
                            gender: response.data.gender,
                            facebook_username: response.data.facebook_username,
                            photo: data.photo
                        })
                    }
                })
            }
        })
    }

    getData = async (key) =>{
        try{
            const value = await AsyncStorage.getItem(key);
            if(value !== null){
                return value;
            }else{
                return null;
            }
        }catch(e){
            console.log(e);
        }
    }

    storeData = async (key, value) =>{
        try{
            await AsyncStorage.setItem(key, value);
        }catch(e){
            console.log(e);
        }
    }

    removeData = async (key) => {
       
        try {
            await AsyncStorage.removeItem(key)
        } catch(e) {
            // remove error
        }
        
        console.log('Done.')
    }

    handleEdit(e){
        e.preventDefault();
        if(this.state.account_id != null){
            fetch(appUrl+"/api/account",{
                'method':'PUT',
                'headers': {'Content-type':'application/json'},
                'body': JSON.stringify({
                    'api_token': this.state.access_token,
                    'account_id': this.state.account_id,
                    'fname': this.state.fname,
                    'lname': this.state.lname,
                    'address': this.state.address,
                    'phone': this.state.phone,
                    'gender': this.state.gender,
                    'facebook_username': this.state.facebook_username
                })
            })
            .then(res => res.json())
            .then(response =>{
                console.log(response);
                if(response.data != null){
                    this.removeData('account_data');
                    this.storeData('account_data', JSON.stringify({
                        fname: response.data.fname,
                        lname: response.data.lname,
                        address: response.data.address,
                        phone: response.data.phone,
                        gender: response.data.gender,
                        facebook_username: response.data.facebook_username,
                        photo: response.data.photo,
                        account_id: response.data.id
                    }));
                    ToastAndroid.show("Account updated", ToastAndroid.SHORT);
                }
            })
        }
    }

    render(){
        return(
            <ScrollView>
            <View style={{padding:15}}>
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
                    <Text style={{marginTop: 30}}>Facebook Username</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10}}
                        onChangeText={(facebook_username) => this.setState({facebook_username})}
                        value={this.state.facebook_username}
                    />
                   
                    <View style={{paddingTop: 20 }}>
                        <Button
                            style={{paddingTop: 20 }}
                            onPress={(e) => { this.handleEdit(e)}}
                            title="Submit" 
                        />
                    </View>
                    
            </View>
            </ScrollView>
        )
    }
}

export default Settings;