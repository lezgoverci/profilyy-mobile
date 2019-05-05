import React, {Component} from 'react';
import {Button, View, Text, ToastAndroid} from 'react-native';
import {url as appUrl} from '../global.json';
import AsyncStorage from '@react-native-community/async-storage';

class Profile extends Component{

    static navigationOptions = {
        headerTitle: 'Profile',
      };

    constructor(props){
        super(props);
        this.state = {
            fname: "",
            lname: "",
            address: "",
            phone: "",
            gender: "",
            email: "",
            facebook_username:"",
            photo:"",
            user_id: "",
            access_token: "",
            account_id:""
        };
    }

    componentDidMount(){
        this.getData("user_id").then(res =>{
            
            this.setState({user_id: res})
            
        })

        this.getData("access_token").then(res =>{
                
            this.setState({access_token: res})
            
        })
        .then(()=>{
            console.log(this.state.access_token);
            console.log(this.state.user_id);
        })
        .then(()=>{
            if(this.state.user_id != null && this.state.access_token != null){
                fetch(appUrl + "/api/user/account",{
                    'method': 'POST',
                    'headers' : {'Content-type': 'application/json'},
                    'body': JSON.stringify({
                        'api_token': this.state.access_token,
                        'user_id': this.state.user_id
                    })
                } )
                .then(res => res.json())
                .then(response =>{
                    console.log(response);
                    if(response.data != null){
                        this.setState({
                            fname: response.data.fname,
                            lname: response.data.lname,
                            address: response.data.address,
                            phone: response.data.phone,
                            gender: response.data.gender,
                            email: response.data.fname,
                            facebook_username: response.data.facebook_username,
                            photo: response.data.photo,
                            account_id: response.data.id
                        });
                    }

                    this.storeData('account_id',response.data.id +"");
                    this.storeData('account_data', JSON.stringify({
                        fname: response.data.fname,
                        lname: response.data.lname,
                        address: response.data.address,
                        phone: response.data.phone,
                        gender: response.data.gender,
                        email: response.data.fname,
                        facebook_username: response.data.facebook_username,
                        photo: response.data.photo,
                        account_id: response.data.id
                    }));
                });
            }
        })

        

        
        
        



    }

    componentDidUpdate(){
        ToastAndroid.show("hi", ToastAndroid.SHORT);
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

    storeData = async (key, value) => {
        try {
          await AsyncStorage.setItem(key, value)
        } catch (e) {
          console.log(e);
        }
      }

    render(){
        return(
            <View style={{padding:15}}>
                <View style={{paddingBottom:15}}>
                    <Text style={{fontWeight: "600"}}>First Name</Text>  
                    <Text>{this.state.fname}</Text>  
                </View>
                <View style={{paddingBottom:15}}>
                    <Text style={{fontWeight: "600"}}>Last Name</Text>  
                    <Text>{this.state.lname}</Text>  
                </View>
                <View style={{paddingBottom:15}}>
                    <Text style={{fontWeight: "600"}}>Address</Text>  
                    <Text>{this.state.address}</Text>  
                </View>
                <View style={{paddingBottom:15}}>
                    <Text style={{fontWeight: "600"}}>Phone</Text>  
                    <Text>{this.state.phone}</Text>  
                </View>
                <View style={{paddingBottom:15}}>
                    <Text style={{fontWeight: "600"}}>Gender</Text>  
                    <Text>{this.state.gender}</Text>  
                </View>
                <View style={{paddingBottom:15}}>
                    <Text style={{fontWeight: "600"}}>Email</Text>  
                    <Text>{this.state.email}</Text>  
                </View>
                <View style={{paddingBottom:15}}>
                    <Text style={{fontWeight: "600"}}>Facebook username</Text>  
                    <Text>{this.state.facebook_username}</Text>  
                </View>
                <View style={{paddingBottom:15}}>
                    <Text style={{fontWeight: "600"}}>Photo</Text>  
                    <Text>{this.state.photo}</Text>  
                </View>
          </View>
        )
    }
}

export default Profile;