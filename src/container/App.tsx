import * as React from 'react';
import { Text, View, StyleSheet,StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Container from './Container';
let persistor = persistStore(store);
interface componentNameProps {}

const App = (props: componentNameProps) => {

  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={'transparent'} translucent={true}/>
        <View style={{flex: 1, backgroundColor: '#0F1316'}}>
          <Container />
        </View>
      </PersistGate>
    </Provider>
    
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
