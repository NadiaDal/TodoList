import React, {useCallback, useEffect, useRef} from 'react';
import {View, StyleSheet, AppState, AppStateStatus} from 'react-native';
import {Provider} from 'react-redux';
import Dashboard from './src/screens/Dashboard';
import store from './src/store';
import {loadTodoEntities} from './src/store/todoEntitiesSlice';
import {saveToStorage} from './src/store/persistStore';

const App = () => {
  const appState = useRef(AppState.currentState);

  const saveStoreOnClose = useCallback(async () => {
    const current = store.getState();
    await saveToStorage(current.todos.entities);
  }, []);

  useEffect(() => {
    store.dispatch(loadTodoEntities());

    const subscription = (nextAppState: AppStateStatus) => {
      appState.current = nextAppState;
      if (appState.current.match(/inactive|background/)) {
        // eslint-disable-next-line no-void
        void saveStoreOnClose();
      }
    };
    AppState.addEventListener('change', subscription);
    return () => {
      AppState.removeEventListener('change', subscription);
    };
  }, [saveStoreOnClose]);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Dashboard />
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
