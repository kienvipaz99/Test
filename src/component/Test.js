import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import style from './Css'

const Test = () => {
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(-1)
  function getData() {
    fetch('https://random-data-api.com/api/users/random_user?size=10').then(res => {
      return res.json();
    }).then(resJson => {
      setData(resJson);
    })
  }
  useEffect(() => {
    getData();
  }, [])
  const Random = () => {
    getData();
  }
  const EvenClick = (index) => {
    setCheck(index)
  }
  const RenderItem = ({ item, index }) => {

    return (
      <>
        {
          check !== index ? (
            <TouchableOpacity style={style.item} onPress={() => {
              EvenClick(index)
            }}>
              <View style={style.styImg}>
                <Image style={style.image} source={{ uri: item?.avatar }} resizeMode={'contain'} />
              </View>

              <View style={style.vText}>
                <Text style={style.first_name}>{item?.first_name}</Text>
                <Text style={style.last_name}>{item?.last_name}</Text>
              </View>



            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={style.item} onPress={() => EvenClick(check !== index ? index : -1)}>

              <Text style={style.mtext}>ID:{item?.id}</Text>
              <Text style={style.mtext}>gender:{item?.gender}</Text>

              <Text style={style.mtext}>phone:{item?.phone_number}</Text>
              <Text style={style.mtext}>date_of_birth:{item?.date_of_birth}</Text>
              <Text style={style.mtext}>username:{item?.username}</Text>
              <Text style={style.mtext}>password:{item?.password}</Text>
              <Text style={style.mtext}>social:{item?.social_insurance_number}</Text>





            </TouchableOpacity>
          )
        }
      </>
    )
  }
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.btn} onPress={Random}>
        <Text style={style.txtbtn}>Fectch Random</Text>
      </TouchableOpacity>
      <View style={style.flt}>
        <FlatList renderItem={RenderItem}
          data={data}

          numColumns={2} />
      </View>
    </View>
  );
};

export default Test;

