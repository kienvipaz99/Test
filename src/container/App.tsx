import * as React from 'react';
import { Text, View, StyleSheet,StatusBar} from 'react-native';
import Test from '../component/Test'
interface componentNameProps {}

const App = (props: componentNameProps) => {
  return (
    <View style={styles.container}>
   <StatusBar backgroundColor={'transparent'} translucent={true}/>
     <Test/>
   
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
