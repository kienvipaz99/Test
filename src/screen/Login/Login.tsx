import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import images from '../../res/images';
import {Checkbox} from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import ButonCustom from '../../component/ButonCustom';
interface componentNameProps {
  navigation: any;
}

const Login = (props: componentNameProps) => {
  const position = ['Nhân viên', 'Giám đốc'];
  const [select, setSelect] = useState(null);
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [checked, setChecked] = React.useState(false);
  const login = () => {
    props.navigation.navigate('Home1');
  };
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={{resizeMode: 'cover'}} source={images.logo} />
      </View>
      <View style={styles.viewinput}>
        <Text style={styles.title}>Chào mừng đến với</Text>
        <Text style={styles.title}>ViCheckin</Text>
        <TextInput
          placeholder="Tên đăng nhập"
          defaultValue={user}
          onChangeText={(val: any) => setUser(val)}
          style={styles.iputuser}
        />
        <TextInput
          placeholder="Tên đăng nhập"
          defaultValue={pass}
          onChangeText={(val: any) => setPass(val)}
          style={[styles.iputuser, {marginTop: 35}]}
        />
      </View>
      <View style={{marginLeft: '50%', marginTop: 15}}>
        <SelectDropdown
          onSelect={(val, index) => {
            setSelect(val);
          }}
          data={position}
          buttonStyle={styles.styleDrop}
          dropdownStyle={{borderRadius: 10}}
          defaultButtonText={'Chọn cấp bậc'}
          rowTextStyle={{fontFamily: 'archivobold'}}
          defaultValue={'Chọn cấp bậc'}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            setSelect(selectedItem);
            return selectedItem;
          }}
          renderDropdownIcon={() => (
            <Image source={images.drop} style={styles.dropicon} />
          )}
        />
      </View>
      <View style={styles.chekbox}>
        <Checkbox
          color="red"
          uncheckedColor="red"
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
        />
        <Text style={{color: 'black'}}>Ghi nhớ đăng nhập ?</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 20}}>
        <ButonCustom Textbtn={'Đăng nhập'} Opress={login} />
      </View>
      <View style={{alignItems: 'center', marginTop: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{color: 'black', alignItems: 'center'}}>
            Bạn chưa có tài khoản
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: 'red'}}> Đăng kí </Text>
          </TouchableOpacity>
          <Text style={{color: 'black'}}>?</Text>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    marginTop: '30%',
    alignItems: 'center',
  },
  iputuser: {
    width: '80%',
    height: 45,
    backgroundColor: '#DCDCD',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 40,
  },
  viewinput: {marginTop: 30, width: '100%', alignItems: 'center'},
  title: {color: 'blue', fontSize: 25, fontWeight: '600'},
  dropicon: {
    width: 20,
    height: 20,
    opacity: 0.4,
  },
  styleDrop: {height: 40, width: '80%', borderRadius: 10},
  chekbox: {flexDirection: 'row', alignItems: 'center', marginLeft: '47%'},
});
