import * as React from 'react';
import { AppRegistry } from 'react-native';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { name as appName } from './app.json';

import MainNavigatorParent from 'containers/main/MainNavigator';
import MainNavigator from 'containers/main/MainNavigator.js';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import colors from 'res/colors.js';
// import { store, persistor } from 'store';
import { store } from 'store';
import { PersistGate } from 'redux-persist/integration/react'


StatusBar.setBarStyle('light-content', true);
StatusBar.backgroundColor = '#000';

const Navigation = createAppContainer(MainNavigator);

const Root = () => (
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <Navigation />
    {/* </PersistGate> */}
  </Provider>
)

AppRegistry.registerComponent(appName, () => Root);