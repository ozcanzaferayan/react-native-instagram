/**
 * @format
 */

import React from 'react';
import { AppRegistry, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { name as appName } from './app.json';
import ActivityScreen from './screens/activity/ActivityScreen';
import AddPostScreen from './screens/addPost/AddPostScreen';
import HomeScreen from './screens/home/HomeScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import SearchScreen from './screens/search/SearchScreen';

import iconActivity from './img/activity.png';
import iconAdd from './img/add.png';
import iconHome from './img/home.png';
import iconProfile from './img/profile.png';
import iconSearch from './img/search.png';

import iconActivitySelected from './img/activity_selected.png';
import iconAddSelected from './img/add_selected.png';
import iconHomeSelected from './img/home_selected.png';
import iconProfileSelected from './img/profile_selected.png';
import iconSearchSelected from './img/search_selected.png';
import DmScreen from './screens/dm/DmScreen';

const DmNavigator = createDrawerNavigator({
  Dm: { screen: DmScreen }
})

const HomeTab = createStackNavigator({
  Home: { screen: HomeScreen },
  Dm: { screen: DmNavigator }
}, {
  initialRouteName: 'Home'
});

const SearchTab = createStackNavigator({
  Search: { screen: SearchScreen }
});
const AddPostTab = createStackNavigator({
  AddPost: { screen: AddPostScreen },
});
const ActivityTab = createStackNavigator({
  Activity: { screen: ActivityScreen },
});
const ProfileTab = createStackNavigator({
  Profile: { screen: ProfileScreen }
});

const Tabs = createBottomTabNavigator({
  Home: HomeTab,
  Search: SearchTab,
  AddPost: AddPostTab,
  Activity: ActivityTab,
  Profile: ProfileTab
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: '#222',
      },

    },
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      var iconNamePrefix;
      var icon;
      switch (routeName) {
        case 'Home':
          icon = focused ? iconHomeSelected : iconHome;
          break;
        case 'Search':
          icon = focused ? iconSearchSelected : iconSearch;
          break;
        case 'AddPost':
          icon = focused ? iconAddSelected : iconAdd;
          break;
        case 'Activity':
          icon = focused ? iconActivitySelected : iconActivity;
          break;
        case 'Profile':
          icon = focused ? iconProfileSelected : iconProfile;
          break;
        default:
          icon = focused ? iconHomeSelected : iconHome;
          break;
      }
      return <Image style={{ width: 25, height: 25 }} source={icon} resizeMode='contain' />;
    }
  })
});




const MainContainer = createAppContainer(Tabs);

AppRegistry.registerComponent(appName, () => MainContainer);
