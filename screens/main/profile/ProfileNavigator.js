import React from 'react';
import {
    View,
    Text,
    Platform,
    Image,
    TouchableOpacity  } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import ProfileScreen from './ProfileScreen';
import ArchiveScreen from './ArchiveScreen';
import ProfileDrawer from './ProfileDrawer';
import images from 'res/images';


const routeConfig = {
    ProfileStackNavigator: {
      screen: createStackNavigator({
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
            headerLeft: () => (
              <View style={{ marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#fff', marginLeft: 10, fontSize: 18, fontWeight: 'bold' }} >ozaferayan</Text>
              </View>
            ),
            headerRight: () => (
              <View style={{ marginRight: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                  <Image style={{ height: 25, width: 25, resizeMode: 'contain' }} source={images.menu} />
                </TouchableOpacity>
              </View>
            )
          })
        }
      })
    },
    Archive: {
      screen: ArchiveScreen,
      navigationOptions: {
        drawerLabel: "Demo Screen 1"
      }
    }
  };

  const navigatorConfig = {
    drawerPosition: 'right',
    drawerType: 'slide',
    contentComponent: ProfileDrawer,
  }

  export default ProfileNavigator = createDrawerNavigator(routeConfig, navigatorConfig);
