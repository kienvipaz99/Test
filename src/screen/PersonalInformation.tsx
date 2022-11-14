import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity,FlatList } from 'react-native';
import Header from '../component/Header';
import images from '../res/images';
import sizes from '../res/sizes';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import { addAvatar, addUser, selectData } from '../redux/state/Data';

interface Props {
  navigation: any
}

const PersonalInformation = (props: Props) => {
  const dispatch = useDispatch();

  const UpLoadImage = () => {
    ImagePicker.openPicker({
      width: sizes._100sdp,
      height: sizes._100sdp,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true
    }).then((image: any) => {
     
      dispatch(addAvatar('data:image/jpeg;base64,' + image.data));
    });
  }
  const data = useSelector(selectData);
  const avt = data.avatarUser
  const renderView:any = [];
  const RenderNullItem=()=> null;
  const viewData=()=>{
    return(
      <>
         <View style={{ marginTop: sizes._40sdp }}>
        <Header
          title
          back
          onBackPress={() => props.navigation.goBack()}

          textTittle={'Thông tin cá nhân'}
        />
      </View>


      <View style={{ alignItems: 'center', marginTop: sizes._40sdp }}>
        <Image
          source={{
            uri:
              avt === ''
                ? 'https://mern-ecommerce-stores.herokuapp.com/profile.png'
                : avt,
          }}
          style={styles.img}
        />
      </View>

      <TouchableOpacity style={{ alignItems: 'center', marginTop: sizes._20sdp }} onPress={UpLoadImage}>
        <Icon name='camera' size={40} color={'black'} />
      </TouchableOpacity>
      <View style={{alignItems:'center'}}>
        <Text style={styles.txtname}>Nguyễn Văn Kiên</Text>
        <Text style={{color:'black'}}>abc@gmail.com</Text>
      </View>
      </>
    )
  }
  return (
    <View style={styles.container}>

<FlatList data={renderView}
      renderItem={RenderNullItem}
      ListEmptyComponent={viewData()}/>
    </View>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },txtname:{color:'black',fontSize:sizes._font_size_maxs,fontWeight:'600'},
  img:{
    height: sizes._100sdp, width: sizes._100sdp, borderRadius: sizes._50sdp
  }
});
