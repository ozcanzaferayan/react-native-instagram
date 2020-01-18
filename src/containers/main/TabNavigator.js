import React from 'react';
import {
  View,
  Text,
  Platform,
  Image,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './home/HomeScreen';
import SearchScreen from './search/SearchScreen';
import AddPostScreen from './addPost/AddPostScreen';
import ActivityScreen from './activity/ActivityScreen';
import ProfileNavigator from './profile/ProfileNavigator';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import images from 'res/images';
import SearchNavigator from './search/SearchNavigator';
import HomeNavigator from './home/HomeNavigator';
import AddPostNavigator from './addPost/AddPostNavigator';
import ActivityNavigator from './activity/ActivityNavigator';
import colors from 'res/colors';
import palette from 'res/palette';

const routeConfig = {
  Home: HomeNavigator,
  Search: SearchNavigator,
  AddPost: AddPostNavigator,
  Activity: ActivityNavigator,
  Profile: ProfileNavigator,
};

const navigatorConfig = {
  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      style: { backgroundColor: colors.tabBackground },
    },
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      var icon;
      switch (routeName) {
        case 'Home': icon = focused ? images.home_selected : images.home; break;
        case 'Search': icon = focused ? images.search_selected : images.search; break;
        case 'AddPost': icon = focused ? images.add_selected : images.add; break;
        case 'Activity': icon = focused ? images.activity_selected : images.activity; break;
        case 'Profile': icon = focused ? images.profile_selected : images.profile; break;
        default: icon = focused ? images.home_selected : images.home; break;
      }
      return <Image style={{...palette.header.image}} source={icon} />
    }
  })
}

export default TabNavigator = createBottomTabNavigator(routeConfig, navigatorConfig);
