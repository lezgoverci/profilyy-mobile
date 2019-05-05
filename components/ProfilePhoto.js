import React, {Component} from 'react';
import {Button, View, Text, ScrollView, CameraRoll, Image, TouchableNativeFeedback} from 'react-native';


class ProfilePhoto extends Component{
    static navigationOptions = {
        headerTitle: 'Profile Photo',
      };

      constructor(props){
            super(props);
            this.state = {photos:[]};
      }

      _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
          })
          .then(r => {
              console.log(r);
            this.setState({ photos: r.edges });
          })
          .catch((err) => {
             console.log(err);
          });
        }

    render(){
        return(
            <View style={{padding:15}}>
                <Button title="Load Images" onPress={() =>{this._handleButtonPress()}} />
                <ScrollView>
                {this.state.photos.map((p, i) => {
                return (
                    <TouchableNativeFeedback key={i}  onPress={()=>{this.props.navigation.navigate('EditPhoto',{uri:p.node.image.uri, height:p.node.image.height})}}>
                        <View style={{marginTop:15}} >
                            <Image
                            style={{
                                flex:1,
                                height:p.node.image.height
                            }}
                            source={{ uri: p.node.image.uri }}
                            />
                        </View>
                    </TouchableNativeFeedback>
                );
                })}
                </ScrollView>
            </View>
        )
    }
}

export default ProfilePhoto;