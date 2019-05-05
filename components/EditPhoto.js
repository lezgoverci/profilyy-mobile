import React, {Component} from 'react';
import {Button, View, Text, Image, ImageEditor} from 'react-native';


class EditPhoto extends Component{
    static navigationOptions = {
        headerTitle: 'Edit Photo',
      };

      constructor(props){
          super(props);
          this.state = {uri:this.props.navigation.getParam('uri')}
      }

      cropImage(){
          ImageEditor.cropImage(
              this.props.navigation.getParam('uri'),
              {
                  offset:{ x: 10, y: 10 },
                  size: {width: 50, height: 50}
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
            <View>
                <Image
                style={{
                    height: this.props.navigation.getParam('height')
                }}
                source={{ uri: this.state.uri }}
                />

                <View>
                    <Button title="Crop" onPress={()=>{this.cropImage()}} />
                </View>
            </View>
        )
    }
}

export default EditPhoto;