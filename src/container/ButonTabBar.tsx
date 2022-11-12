import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import sizes from '../res/sizes';
import Home from '../screen/Home/Home';
import Icon from 'react-native-vector-icons/Entypo';
import ICcalendar from 'react-native-vector-icons/FontAwesome';

import Calendar from '../screen/Home/Calendar';
import News from '../screen/Home/News';
import Profile from '../screen/Home/Profile';

const Tab = createBottomTabNavigator();
const ButonTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Calendar"
        component={Calendar}
        options={{
          tabBarLabelStyle: {
            fontSize: sizes._font_size_big_big,
            marginBottom: sizes._7sdp,
          },
          tabBarIcon: ({focused, size, color}) => {
            return focused ? (
              <>
                <ICcalendar name="calendar" color={color} size={size} />
              </>
            ) : (
              <ICcalendar name="calendar" color={color} size={size} />
            );
          },
          headerShown: false,
          tabBarStyle: {
            borderTopRightRadius: sizes._20sdp,
            borderTopLeftRadius: sizes._20sdp,
            backgroundColor: '#FFFFFF',
            height: sizes._70sdp,
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabelStyle: {
            fontSize: sizes._font_size_big_big,
            marginBottom: sizes._7sdp,
          },
          tabBarIcon: ({focused, size, color}) => {
            return focused ? (
              <>
                <Icon name="calendar" color={color} size={size} />
              </>
            ) : (
              <Icon name="calendar" color={color} size={size} />
            );
          },
          headerShown: false,
          tabBarStyle: {
            borderTopRightRadius: sizes._20sdp,
            borderTopLeftRadius: sizes._20sdp,
            backgroundColor: '#FFFFFF',
            height: sizes._70sdp,
          },
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarLabelStyle: {
            fontSize: sizes._font_size_big_big,
            marginBottom: sizes._7sdp,
          },
          tabBarIcon: ({focused, size, color}) => {
            return focused ? (
              <>
                <Icon name="news" color={color} size={size} />
              </>
            ) : (
              <Icon name="news" color={color} size={size} />
            );
          },
          headerShown: false,
          tabBarStyle: {
            borderTopRightRadius: sizes._20sdp,
            borderTopLeftRadius: sizes._20sdp,
            backgroundColor: '#FFFFFF',
            height: sizes._70sdp,
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabelStyle: {
            fontSize: sizes._font_size_big_big,
            marginBottom: sizes._7sdp,
          },
          tabBarIcon: ({focused, size, color}) => {
            return focused ? (
              <>
                <Icon name="user" color={color} size={size} />
              </>
            ) : (
              <Icon name="user" color={color} size={size} />
            );
          },
          headerShown: false,
          tabBarStyle: {
            borderTopRightRadius: sizes._20sdp,
            borderTopLeftRadius: sizes._20sdp,
            backgroundColor: '#FFFFFF',
            height: sizes._70sdp,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default ButonTabBar;

const styles = StyleSheet.create({});
