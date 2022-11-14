import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface Props {}

const Honors = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>componentName</Text>
    </View>
  );
};

export default Honors;

const styles = StyleSheet.create({
  container: {}
});
