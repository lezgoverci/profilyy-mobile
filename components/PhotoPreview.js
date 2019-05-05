import React, {Component} from 'react';
import {Button, View, Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

class PhotoPreview extends Component{
    static navigationOptions = {
        headerTitle: 'Preview Crop',
      };
    render(){
        console.log(this.props.navigation.getParam('uri'));
        return(
            <View style={{padding:15}}>
                <Icon style={{paddingVertical:15}} name="md-arrow-back" size={30} onPress={() => this.props.navigation.navigate('EditPhoto')}/>
                <Image 
                    source={{ uri: this.props.navigation.getParam('uri')}}
                    style={{
                        //width: this.props.navigation.getParam('width') - 30,
                        height: this.props.navigation.getParam('height')

                    }}
                    resizeMode="contain"
                    />
            </View>
        )
    }
}

export default PhotoPreview;