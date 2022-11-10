import  React,{useEffect,useState} from 'react';
import { Text, View, StyleSheet ,Image,TouchableOpacity,TextInput} from 'react-native';
import images from '../res/images';
import { Checkbox } from 'react-native-paper';
interface componentNameProps {}

const Login = (props: componentNameProps) => {
  const [user, setUser] = useState();
  const [pass, setPass] = useState();
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={styles.container}>
     
    <View style={styles.logo}>
    <Image style={{resizeMode:'cover'}} source={images.Logo}/>
    
    </View>
    <View style={styles.viewinput}>
    <Text style={styles.title}>Chào mừng đến với ViCheckin</Text>
    <Text style={styles.title}>ViCheckin</Text>
      <TextInput placeholder='Tên đăng nhập' defaultValue={user} onChangeText={(val:any)=>setUser(val)} style={styles.iputuser}/>
      <TextInput placeholder='Tên đăng nhập' defaultValue={pass} onChangeText={(val:any)=>setPass(val)} style={[styles.iputuser,{marginTop:35}]}/>
    </View>
    <View style={{flexDirection:'row',alignItems:'center',marginLeft:'40%'}}>
    <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    <Text>Ghi nhớ đăng nhập ?</Text>
    </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',alignItems:'center'
  },logo:{
    marginTop:'30%'
  },iputuser:{
    width:'80%',
    height:45,backgroundColor:'#DCDCD',borderRadius:10,borderColor:'black',borderWidth:1,
    marginTop:40
    
  },
  viewinput:{marginTop:30,width:'100%',alignItems:'center'},
  title:{color:'blue',fontSize:25,fontWeight:'600'}
});
