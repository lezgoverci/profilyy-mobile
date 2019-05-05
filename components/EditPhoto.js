import React, {Component} from 'react';
import {Button, View, TextInput, Image, ImageEditor} from 'react-native';
import Slider from '@react-native-community/slider';


class EditPhoto extends Component{
    static navigationOptions = {
        headerTitle: 'Edit Photo',
      };

      constructor(props){
          super(props);
          this.state = {uri:this.props.navigation.getParam('uri'), cropHeight: 300}
      }

      cropImage(){
          ImageEditor.cropImage(
              this.props.navigation.getParam('uri'),
              {
                  offset:{ x: 0, y: (this.props.navigation.getParam('height') - 300) / 2 },
                  size: {width: this.props.navigation.getParam('width'), height: ((this.props.navigation.getParam('height') - 300) / 2) + 300}
              },
              (uri) =>{
                  console.log(uri);
                  this.setState({uri:uri})
              },
              (err) => {
                  console.log(err)
              }
          )
      }
    render(){
        return(
            <View style={{padding:15}}>

                <View>
                    <Image
                    style={{
                        //height: this.props.navigation.getParam('height'),
            
                        height: this.state.cropHeight

                    }}
                    source={{ uri: this.state.uri }}
                    resizeMode="cover"
                    />
                </View>

                <View>
                    <Slider
                        style={{width: 200, height: 40}}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                    />
                    <Button title="Crop" onPress={()=>{this.cropImage()}} />
                </View>
            </View>
        )
    }
}

export default EditPhoto;