import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {}

const Calendar = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Calendar</Text>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
