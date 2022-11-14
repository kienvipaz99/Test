import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {selectData, addUser} from '../../redux/state/Data';
import images from '../../res/images';
const Register = ({}) => {
  const dispatch = useDispatch();
  const datacoin = useSelector(selectData);
 
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 30, fontFamily: 'archivo'}}>okegdgdf</Text>
      </View>
    </View>
  );
};

export default Register;
