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
  Easing, Animated,
  Picker
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
import iconPhotoCamera from './img/photo_camera.png';

import iconActivitySelected from './img/activity_selected.png';
import iconAddSelected from './img/add_selected.png';
import iconHomeSelected from './img/home_selected.png';
import iconProfileSelected from './img/profile_selected.png';
import iconSearchSelected from './img/search_selected.png';
import DmScreen from './screens/dm/DmScreen';


import iconLogo from './img/logo.png';
import iconIgtv from './img/igtv.png';
import iconDm from './img/dm.png';
import iconQr from './img/qr_code.png';
import iconClose from './img/close.png';
import iconMenu from './img/menu.png';
import StoryCameraScreen from './screens/storyCamera/StoryCameraScreen.js';

import { Dropdown } from 'react-native-material-dropdown';



const Tabs = createBottomTabNavigator({
  Home: createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#222',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
        },
        headerLeft: () => (
          <View style={{ marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
            <TouchableOpacity onPress={() => navigation.navigate('StoryCamera', { transition: 'toLeft' })}>
              <Image style={{ height: 25, width: 25 }} source={iconPhotoCamera} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Info')}>
              <Image style={{ marginLeft: 10, height: 30, width: 80, resizeMode: 'center' }} source={iconLogo} />
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => (
          <View style={{ marginRight: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Info')}>
              <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={iconIgtv} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Dm', { transition: 'toRight' })}>
              <Image style={{ marginLeft: 20, paddingTop: 10, height: 23, width: 23, resizeMode: 'contain' }} source={iconDm} />
            </TouchableOpacity>
          </View>
        ),
      })
    }
  }),
  Search: createStackNavigator({
    Search: {
      screen: SearchScreen,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#222',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
        },
        headerLeft: () => (
          <View style={{ marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={{ height: 25, width: 25 }} source={iconSearchSelected} />
            <Text style={{ color: '#ddd', marginLeft: 10, fontSize: 18 }} >Ara</Text>
          </View>
        ),
        headerRight: () => (
          <View style={{ marginRight: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Info')}>
              <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={iconQr} />
            </TouchableOpacity>
          </View>
        ),
      })
    }
  }),
  AddPost: createStackNavigator({
    AddPost: {
      screen: AddPostScreen,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#222',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
        },
        headerLeft: () => (
          <View style={{ marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ height: 25, width: 25 }} source={iconClose} />
            <Dropdown
              style={{ borderBottomWidth: 0 }}
              baseColor='#fff'
              containerStyle={{
                width: 70,
                justifyContent: 'center',
                marginLeft: 15,
                borderBottomWidth: 0,
              }}
              label='Galeri'
              data={[{
                value: 'Fotoğraflar',
              }, {
                value: 'Videolar',
              }, {
                value: 'Instagram',
              }]}
            />
          </View>
        ),
        headerRight: () => (
          <View style={{ marginRight: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Info')}>
              <Text style={{ color: '#30ABF1', marginLeft: 10, fontSize: 18 }} >İleri</Text>
            </TouchableOpacity>
          </View>
        ),
      })
    }
  }),
  Activity: createStackNavigator({
    Activity: {
      screen: ActivityScreen,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#222',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
        },
        headerLeft: () => (
          <View style={{ marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#fff', marginLeft: 10, fontSize: 18 }} >Hareketler</Text>
          </View>
        ),
      })
    }
  }),
  Profile: createStackNavigator({
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#222',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
        },
        borderBottomColor: '#222',
        headerLeft: () => (
          <View style={{ marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ color: '#fff', marginLeft: 10, fontSize: 18, fontWeight: 'bold' }} >ozaferayan</Text>
            {/* TODO */}
            {/* <Image style={{ color: '#fff', marginLeft: 10, fontSize: 18, fontWeight: 'bold' }} >ozaferAyan</Text> */}
          </View>
        ),
        headerRight: () => {
          <View style={{ marginRight: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
            <TouchableOpacity onPress={() => navigation.navigate('Info')}>
              <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={iconMenu} />
            </TouchableOpacity>
          </View>
        }
      })
    }
  })
}, {
  initialRouteName: 'Profile',
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
},
  {
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
);

StatusBar.setBarStyle('light-content', true);
StatusBar.backgroundColor = '#000';
const MainContainer = createAppContainer(stackNavigator);

AppRegistry.registerComponent(appName, () => MainContainer);
