import React, {Component} from 'react';
import {Button, View, Text, ScrollView, CameraRoll, Image} from 'react-native';


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
                    <View key={i} style={{marginTop:15}}>
                        <Image
                        style={{
                            flex:1,
                            height:p.node.image.height
                        }}
                        source={{ uri: p.node.image.uri }}
                        />
                    </View>
                );
                })}
                </ScrollView>
            </View>
        )
    }
}

export default ProfilePhoto;