import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import Header from '../component/Header';
import images from '../res/images';
import sizes from '../res/sizes';
import Icon from 'react-native-vector-icons/FontAwesome';


interface Props {
    navigation:any
}

const PersonalInformation = (props: Props) => {
  return (
    <View style={styles.container}>
   
  <View style={{marginTop:sizes._40sdp}}>
  <Header
       title
       back
       onBackPress={() => props.navigation.goBack()}
     
       textTittle={'Thông tin cá nhân'}
        />
  </View>
  <View style={{alignItems:'center',marginTop:sizes._40sdp}}>
    <Image source={images.imageAvatar} style={{height:sizes._100sdp,width:sizes._100sdp,borderRadius:sizes._50sdp}}/>
    <Icon name='camera' size={40} color={'black'} style={{marginTop:sizes._15sdp}}/>
  </View>
    </View>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FFFFFF'
  }
});
