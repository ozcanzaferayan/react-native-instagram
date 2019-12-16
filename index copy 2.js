/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Platform,
  StatusBar,
  FlatList,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
  Easing, Animated
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
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


import iconCamera from './img/camera.png';
import iconLogo from './img/logo.png';
import iconIgtv from './img/igtv.png';
import iconDm from './img/dm.png';
import StoryCameraScreen from './screens/storyCamera/StoryCameraScreen.js';


const Tabs = createBottomTabNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  AddPost: AddPostScreen,
  Activity: ActivityScreen,
  Profile: ProfileScreen
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

const stackNavigator = createStackNavigator({
  Main: {
    screen: Tabs,
    navigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#222',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
      },
      transitionConfig: TransitionConfiguration,
//       header: ({ goBack }) => ({
//         left: <View onPress={goBack}>

// <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={iconIgtv} />
//           </View>,
//       }),
      headerLeft: () => (
        <View style={{ marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
          <TouchableOpacity onPress={() => navigation.navigate('StoryCamera')}>
            <Image style={{ height: 25, width: 25 }} source={iconCamera} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Info')}>
            <Image style={{ marginLeft: 20, height: 30, width: 80, resizeMode: 'center' }} source={iconLogo} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{ marginRight: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Info')}>
            <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={iconIgtv} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Dm', { transition: 'collapseExpand' })}>
            <Image style={{ marginLeft: 20, paddingTop: 10, height: 23, width: 23, resizeMode: 'contain' }} source={iconDm} />
          </TouchableOpacity>
        </View>
      ),
    })
  },
  Dm: {
    screen: DmScreen
  },
  StoryCamera: {
    screen: StoryCameraScreen
  }},
  {
    initialRouteName: 'Main',
    transitionConfig: TransitionConfiguration,
  }
);

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 2000,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene
      const params = route.params || {}; // <- That's new
      const transition = params.transition || 'default'; // <- That's new
      return {
        collapseExpand: CollapseExpand(index, position),
        default: SlideFromRight(index, position, width),
      }[transition];
    },
  }
}

let SlideFromRight = (index, position, width) => {
  const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [-width, 0, 0]
  })
  const slideFromRight = { transform: [{ translateX }] }
  return slideFromRight
};

let CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: ([0, 1, 1]),
  });

  return {
    opacity,
    transform: [
      { scaleY }
    ]
  };
};

const MainContainer = createAppContainer(stackNavigator);

AppRegistry.registerComponent(appName, () => MainContainer);
