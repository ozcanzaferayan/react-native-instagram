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

import images from 'res/images';

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
                <Image style={{ height: 25, width: 25 }} source={images.photo_camera} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                <Image style={{ marginLeft: 10, height: 30, width: 80, resizeMode: 'center' }} source={images.logo} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={images.igtv} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Dm', { transition: 'toRight' })}>
                <Image style={{ marginLeft: 20, paddingTop: 10, height: 23, width: 23, resizeMode: 'contain' }} source={images.dm} />
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
              <Image style={{ height: 25, width: 25 }} source={images.search_selected} />
              <Text style={{ color: '#ddd', marginLeft: 10, fontSize: 18 }} >Ara</Text>
            </View>
          ),
          headerRight: () => (
            <View style={{ marginRight: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
              <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={images.qr_code} />
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
              <Image style={{ height: 25, width: 25 }} source={images.close} />
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
    initialRouteName: 'Home',
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
          case 'Home': icon = focused ? images.home_selected : images.home; break;
          case 'Search': icon = focused ? images.search_selected : images.search; break;
          case 'AddPost': icon = focused ? images.add_selected : images.add; break;
          case 'Activity': icon = focused ? images.activity_selected : images.activity; break;
          case 'Profile': icon = focused ? images.profile_selected : images.profile; break;
          default: icon = focused ? images.home_selected : images.home; break;
        }
        return <Image style={{ width: 25, height: 25 }} source={icon} resizeMode='contain' />;
      }
    })
  }

  export default TabNavigator = createBottomTabNavigator(routeConfig, navigatorConfig);
