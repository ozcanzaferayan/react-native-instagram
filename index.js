import { AppRegistry } from 'react-native';
import { StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { name as appName } from './app.json';

import MainNavigatorParent from './screens/main/MainNavigator.js';
import MainNavigator from './screens/main/MainNavigator.js';

StatusBar.setBarStyle('light-content', true);
StatusBar.backgroundColor = '#000';

const MainContainer = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => MainContainer);
