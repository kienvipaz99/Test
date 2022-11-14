import {StyleSheet, Text, View, Image,FlatList} from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import images from '../../res/images';
import sizes from '../../res/sizes';
import RenderItemProfile from '../../component/renderItem/RenderItemProfile';
import Functionuser from '../../data/Functionuser'
import { useSelector } from 'react-redux';
import { selectData } from '../../redux/state/Data';
const Profile = ({navigation}:any) => {

  const data = useSelector(selectData);
 
 
 const avt = data.avatarUser
  
  const rendeItem = ({item,index}: any) => {
  
    return (
      <>
        <RenderItemProfile name={item.name} icon={item.icon} navi={item.navigation} navigation={navigation}/>
      </>
    );
  };
const renderView:any = [];
const RenderNullItem=()=> null;
  const viewData =()=>{
    return(
      <>
      <View style={{marginLeft: 20}}>
        <Header
          user={true}
          infoUser={{
            name: 'Quản lý tài khoản',
            position: 'abc@gmail.com',
            uriImage: images.slogan_thu_hut_khach_hang2,
          }}
        />
       
        
      </View>
      <View style={{alignItems:'center',height:'14%'}}>
      <View style={styles.styleProfile}>
      <Image
          source={{
            uri:
              avt === ''
                ? 'https://mern-ecommerce-stores.herokuapp.com/profile.png'
                : avt,
          }}
          style={styles.avatar}
        />
          <View>
            <Text style={styles.textname}>{'Nguyễn Văn Kiên'}</Text>
            <Text style={styles.textname}>{'0123456789'}</Text>
          </View>
        </View>
      </View>
     <View style={{width:'100%'}}>
     <FlatList renderItem={rendeItem}
      style={{width:'100%',marginTop:sizes._50sdp,}}
      data={Functionuser || []}
      keyExtractor={(item,index)=>item && item.id ?`${item?.id?.toString()}`:index?.toString()}/>
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
    height: '100%',
    width: '90%',
    backgroundColor: '#E8E8E8',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: sizes._25sdp,
    borderRadius: sizes._12sdp,
  },
});
