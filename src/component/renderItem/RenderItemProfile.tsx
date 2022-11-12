import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import sizes from '../../res/sizes';
import Icon from 'react-native-vector-icons/AntDesign';

interface Props {
  name: string;
}
const RenderItemProfile = (props: Props) => {
  return (
    <View
      style={{
        height: sizes._60sdp,
        width: '100%',
        borderRadius: sizes._15sdp,
        borderColor: 'black',
      }}>
      <Icon name="right" color={'black'} size={30} />
      <Text>{props.name}</Text>
    </View>
  );
};

export default RenderItemProfile;

const styles = StyleSheet.create({});
