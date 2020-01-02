import * as React from 'react';
import { AppRegistry } from 'react-native';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { name as appName } from './app.json';

import MainNavigatorParent from './screens/main/MainNavigator.js';
import MainNavigator from './screens/main/MainNavigator.js';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import colors from 'res/colors.js';
import store from 'store';

StatusBar.setBarStyle('light-content', true);
StatusBar.backgroundColor = '#000';

const Navigation = createAppContainer(MainNavigator);

const Root = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
)

AppRegistry.registerComponent(appName, () => Root);