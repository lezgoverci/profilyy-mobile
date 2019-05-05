import React, {Component} from 'react';
import {Button, View, Text, Image} from 'react-native';


class EditPhoto extends Component{
    static navigationOptions = {
        headerTitle: 'Edit Photo',
      };
    render(){
        return(
            <View>
                <Image
                style={{
                    height: this.props.navigation.getParam('height')
                }}
                source={{ uri: this.props.navigation.getParam('uri') }}
                />
            </View>
        )
    }
}

export default EditPhoto;