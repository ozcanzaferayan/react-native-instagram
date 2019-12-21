import React from 'react';
import {
    View,
    Text,
    Platform,
    Image,
    Easing, Animated,
    TouchableOpacity  } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './home/HomeScreen';
import SearchScreen from './search/SearchScreen';
import AddPostScreen from './addPost/AddPostScreen';
import ActivityScreen from './activity/ActivityScreen';
import ProfileNavigator from './profile/ProfileNavigator';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import iconActivity from '../../img/activity.png';
import iconAdd from '../../img/add.png';
import iconHome from '../../img/home.png';
import iconProfile from '../../img/profile.png';
import iconSearch from '../../img/search.png';
import iconPhotoCamera from '../../img/photo_camera.png';

import iconActivitySelected from '../../img/activity_selected.png';
import iconAddSelected from '../../img/add_selected.png';
import iconHomeSelected from '../../img/home_selected.png';
import iconProfileSelected from '../../img/profile_selected.png';
import iconSearchSelected from '../../img/search_selected.png';
import iconQr from '../../img/qr_code.png';
import iconClose from '../../img/close.png';
import iconLogo from '../../img/logo.png';
import iconIgtv from '../../img/igtv.png';
import iconDm from '../../img/dm.png';

import { Dropdown } from 'react-native-material-dropdown';
import DmScreen from './home/dm/DmScreen';
import StoryCameraScreen from './home/storyCamera/StoryCameraScreen';

const routeConfig = {
  Main: {
    screen: MainNavigator,
    navigationOptions: ({ navigation }) => ({
      header: null
    })
  },
  Dm: {
    screen: DmScreen
  },
  StoryCamera: {
    screen: StoryCameraScreen
  }
};


  const navigatorConfig = {
    initialRouteName: 'Main',
    //initialRouteName: 'StoryCamera',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const width = layout.initWidth;
        const { index, route } = scene
        const params = route.params || {};
        const transition = params.transition || 'toRight';
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [transition === 'toRight' ? width : -width, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX: translateX }] };
      },
    })
  }

  export default MainNavigatorParent = createStackNavigator(routeConfig, navigatorConfig);
