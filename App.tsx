import React from 'react';
import {View, StyleSheet} from 'react-native';
import Index from './src/screens/Dashboard';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Index />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
