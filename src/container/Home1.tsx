import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React, {useState} from 'react';
import ButonTabBar from './ButonTabBar';
import Icon from 'react-native-vector-icons/Ionicons';
import sizes from '../res/sizes';

interface Props {}
const Home1 = (props: Props) => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View
          style={{
            marginTop: 40,
          }}></View>

        <ButonTabBar />
      </View>
    </>
  );
};

export default Home1;
const styles = StyleSheet.create({
  avatar: {
    height: sizes._60sdp,
    width: sizes._60sdp,
    marginLeft: '69%',
  },
  img: {
    height: sizes._60sdp,
    width: sizes._60sdp,

    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'blue',
  },
});
