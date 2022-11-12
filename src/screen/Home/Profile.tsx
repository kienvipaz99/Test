import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import images from '../../res/images';
import sizes from '../../res/sizes';
import RenderItemProfile from '../../component/renderItem/RenderItemProfile';

const Profile = () => {
  const rendeItem = ({item}: any) => {
    return (
      <>
        <RenderItemProfile name="" />
      </>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 20}}>
        <Header
          user={true}
          infoUser={{
            name: 'Quản lý tài khoản',
            position: 'abc@gmail.com',
            uriImage: images.slogan_thu_hut_khach_hang2,
          }}
        />
        <View style={styles.styleProfile}>
          <Image source={images.avatar} style={styles.avatar} />
          <View>
            <Text style={styles.textname}>{'Nguyễn Văn Kiên'}</Text>
            <Text style={styles.textname}>{'0123456789'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    height: sizes._60sdp,
    width: sizes._60sdp,
    borderRadius: sizes._50sdp,
    borderWidth: 2,
    borderColor: '#FFCC33',
    marginLeft: sizes._30sdp,
  },
  textname: {
    color: 'black',
    marginLeft: sizes._30sdp,
    margin: 5,
  },
  styleProfile: {
    height: '35%',
    width: '90%',
    backgroundColor: '#E8E8E8',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes._25sdp,
    borderRadius: sizes._12sdp,
  },
});
