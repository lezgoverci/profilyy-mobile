import React, {Component} from 'react';
import {Button, Text, View, TextInput, Image, ImageEditor, ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


class EditPhoto extends Component{
    static navigationOptions = {
        headerTitle: 'Edit Photo',
      };

      constructor(props){
          super(props);
          this.state = {
              uri:this.props.navigation.getParam('uri'), 
              cropHeight: this.props.navigation.getParam('height') +"",
              cropWidth: this.props.navigation.getParam('width')+"",
              cropY:'0',
              cropX:'0'
            }
      }

      cropImage(){
          ImageEditor.cropImage(
              this.props.navigation.getParam('uri'),
              {
                  offset:{ 
                      x: parseInt(this.state.cropX), 
                      y: parseInt(this.state.cropY)
                    },
                  size: {
                      width: parseInt(this.state.cropWidth), 
                      height: parseInt(this.state.cropHeight)
                    }
              },
              (uri) =>{
                  //console.log(uri);
                  //this.setState({uri:uri})
                  this.props.navigation.navigate('PhotoPreview',{
                      uri: uri,
                      width: parseInt(this.state.cropWidth),
                      height: parseInt(this.state.cropHeight)
                  })
              },
              (err) => {
                  console.log(err)
              }
          )
      }
    render(){
        return(
            <ScrollView >
            <View style={{padding:15}}>
                <Icon style={{paddingVertical:15}} name="md-arrow-back" size={30} onPress={() => this.props.navigation.navigate('ProfilePhoto')}/>
                <View>
                    <Image
                    style={{
                        height: this.props.navigation.getParam('height') - 50,
            

                    }}
                    source={{ uri: this.state.uri }}
                    resizeMode="contain"
                    />
                </View>
                <View>
                    <Text>Width: {this.props.navigation.getParam('width')}</Text>
                    <Text>Height: {this.props.navigation.getParam('height')}</Text>
                </View>

                <View  style={{paddingBottom:15}}>
                    {/* <TextInput value={this.props.cropHeight} onChangeText={(cropHeight) => this.setState({cropHeight})} /> */}
                    <Text style={{paddingTop:15}}>X</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10}}
                        onChangeText={(cropX) => this.setState({cropX})}
                        value={this.state.cropX}
                    />
                    <Text style={{paddingTop:15}}>Y</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10}}
                        onChangeText={(cropY) => this.setState({cropY})}
                        value={this.state.cropY}
                    />
                    <Text style={{paddingTop:15}}>Width</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10}}
                        onChangeText={(cropWidth) => this.setState({cropWidth})}
                        value={this.state.cropWidth}
                    />
                    <Text style={{paddingTop:15}}>Height</Text>
                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop:10}}
                        onChangeText={(cropHeight) => this.setState({cropHeight})}
                        value={this.state.cropHeight}
                    />
                    <View style={{paddingTop:15}}>
                        <Button title="Crop" onPress={()=>{this.cropImage()}} />
                    </View>
                    
                </View>
                </View>
            </ScrollView>
        )
    }
}

export default EditPhoto;