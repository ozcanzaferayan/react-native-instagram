import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import images from 'res/images';
import palette from 'res/palette';
import HomeScreen from './HomeScreen';


const HomeNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      ...palette.header,
      headerLeft: () => (
        <View style={styles.headerLeftContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('StoryCamera', { transition: 'toLeft' })}>
            <Image style={styles.headerLeftImage} source={images.photo_camera} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Info')}>
            <Image style={styles.headerLogo} source={images.logo} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Info')}>
            <Image style={styles.headerRightImage1} source={images.igtv} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Dm', { transition: 'toRight' })}>
            <Image style={styles.headerRightImage2} source={images.dm} />
          </TouchableOpacity>
        </View>
      ),
    })
  }
});

const styles = StyleSheet.create({
  headerLeftContainer: { ...palette.header.headerLeftContainer },
  headerLeftImage: {...palette.header.image},
  headerRightContainer: { ...palette.header.headerRightContainer },
  headerRightImage1: {...palette.header.image},
  headerRightImage2: {...palette.header.image, marginLeft: 20},
  headerLogo: { marginLeft: 10, height: 30, width: 80, resizeMode: 'center' },
});

export default HomeNavigator;
