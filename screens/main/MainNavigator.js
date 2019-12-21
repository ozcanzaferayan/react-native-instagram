import React from 'react';
import {
    View,
    Text,
    Platform,
    Image,
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

const routeConfig = {
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
        navigationOptions: () => ({
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
    Profile: ProfileNavigator,
  };


  const navigatorConfig = {
    initialRouteName: 'Profile',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        style: {
          backgroundColor: '#222',
        },
  
      },
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        var icon;
        switch (routeName) {
          case 'Home': icon = focused ? iconHomeSelected : iconHome; break;
          case 'Search': icon = focused ? iconSearchSelected : iconSearch; break;
          case 'AddPost': icon = focused ? iconAddSelected : iconAdd; break;
          case 'Activity': icon = focused ? iconActivitySelected : iconActivity; break;
          case 'Profile': icon = focused ? iconProfileSelected : iconProfile; break;
          default: icon = focused ? iconHomeSelected : iconHome; break;
        }
        return <Image style={{ width: 25, height: 25 }} source={icon} resizeMode='contain' />;
      }
    })
  }

  export default MainNavigator = createBottomTabNavigator(routeConfig, navigatorConfig);
