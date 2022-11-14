import React,{useState} from 'react';
import { Text, View, StyleSheet,FlatList, TouchableOpacity,Image } from 'react-native';
import Header from '../component/Header';
import images from '../res/images';
import sizes from '../res/sizes';
import Icon from 'react-native-vector-icons/AntDesign';
import Honors from '../component/Honors';
import Late from '../component/Late';


interface Props {
    navigation:any
}

  
const TimekeepingRating = (props: Props) => {
  const [tab,setTab]=useState(2)
    const renderView:any = [];
const RenderNullItem=()=> null;

const viewData=()=>{
    return(
        <>
        <TouchableOpacity style={styles.btnmonth}>
            <Text style={styles.slectmonth}>Tháng 1</Text>
           <Icon name='caretdown' color={'black'} size={sizes._20sdp}/>
        </TouchableOpacity>
        <View style={{width:'100%',flexDirection:'row'}}> 
        <TouchableOpacity style={[styles.btnTab,{backgroundColor:tab===1?'red':'white'}]} onPress={()=>setTab(1)}><Text>1</Text></TouchableOpacity>
        <TouchableOpacity style={[styles.btnTab,{backgroundColor:tab===2?'blue':'white'}]} onPress={()=>setTab(2)}><Text>2</Text></TouchableOpacity>
        </View>
         {
          tab ===1 ? (<Honors/>): tab===2?(<Late/>):null
         }
        </>
    )
}
  return (
    <View style={styles.container}>
      <View style={{ marginTop: sizes._40sdp }}>
      <Header
          title
          back
          onBackPress={() => props.navigation.goBack()}

          textTittle={'Bảng chấm công tháng'}
        />
      </View>
      <FlatList data={renderView}
      renderItem={RenderNullItem}
      ListEmptyComponent={viewData()}/>
    </View>
  );
};

export default TimekeepingRating;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#FFFFFF'
  },slectmonth:{color:'black',fontWeight:'600',fontSize:sizes._font_size_big},
  btnmonth:{
    height:sizes._40sdp,
    width:'30%',
    backgroundColor:'lightcyan',
    alignItems:'center',
    justifyContent:'space-around',flexDirection:'row',marginLeft:sizes._20sdp,marginTop:sizes._20sdp
  },btnTab:{width:'50%',height:sizes._50sdp,borderColor:'black',borderWidth:1,alignItems:'center',justifyContent:'center'}
});
