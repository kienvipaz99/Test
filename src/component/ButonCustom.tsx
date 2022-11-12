import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import sizes from '../res/sizes';

const ButonCustom = ({Textbtn, Opress}: any) => {
  return (
    <View>
      <TouchableOpacity onPress={Opress} style={styles.btn}>
        <Text style={styles.text}>{Textbtn}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ButonCustom;
const styles = StyleSheet.create({
  btn: {
    height: sizes._60sdp,
    width: '100%',
    backgroundColor: '#33CCFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes._15sdp,
  },
  text: {
    fontSize: sizes._font_size_maxs,
    color: 'black',
    fontWeight: '600',
    paddingLeft: sizes._50sdp,
    paddingRight: sizes._50sdp,
  },
});
