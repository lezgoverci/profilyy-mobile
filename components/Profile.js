import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
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
            user_id: "",
            access_token: ""
        };
    }

    componentDidMount(){
        this.getData("user_id").then(res =>{
            this.setState({user_id: res},()=>{console.log(this.state.user_id)})
            
        }).then(()=>{
            this.getData("access_token").then(res =>{
                this.setState({access_token: res},()=>{console.log(this.state.access_token)})
                
            })
        }).then(()=>{
            if(this.state.user_id != null && this.state.access_token != null){
                fetch(appUrl + "/api/user/account",{
                    'method': 'POST',
                    'headers' : {'Content-type': 'application/json'},
                    'body': JSON.stringify({
                        'api_token': this.state.access_token,
                        'id': this.state.user_id
                    })
                } )
                .then(response =>{
                    console.log(response);
                });
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

    render(){
        return(
            <View>
                <View>
                    <Text>First Name</Text>  
                    <Text>{this.state.fname}</Text>  
                </View>
                <View>
                    <Text>Last Name</Text>  
                    <Text>{this.state.lname}</Text>  
                </View>
                <View>
                    <Text>Address</Text>  
                    <Text>{this.state.address}</Text>  
                </View>
                <View>
                    <Text>Phone</Text>  
                    <Text>{this.state.phone}</Text>  
                </View>
                <View>
                    <Text>Gender</Text>  
                    <Text>{this.state.gender}</Text>  
                </View>
                <View>
                    <Text>Email</Text>  
                    <Text>{this.state.email}</Text>  
                </View>
          </View>
        )
    }
}

export default Profile;