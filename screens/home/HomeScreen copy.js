/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
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
  TouchableOpacity
} from 'react-native';

import Post from './Post';

import iconCamera from '../../img/camera.png';
import iconLogo from '../../img/logo.png';
import iconIgtv from '../../img/igtv.png';
import iconDm from '../../img/dm.png';


const HomeScreen = () => {
  const paddingStart = 10;
  const numColumns = 6;
  const tileWidth = Dimensions.get('window').width / numColumns;
  const stories = [
    { key: 'ngordon', src: 'https://i.pravatar.cc/150?img=8' },
    { key: 'r_von_rails', src: 'https://i.pravatar.cc/150?img=9' },
    { key: 'figNelson', src: 'https://i.pravatar.cc/150?img=10' },
    { key: 'benjaminEv', src: 'https://i.pravatar.cc/150?img=11' },
    { key: 'gilesPos', src: 'https://i.pravatar.cc/150?img=12' },
    { key: 'hugh27', src: 'https://i.pravatar.cc/150?img=13' },
    { key: 'b.guidelines', src: 'https://i.pravatar.cc/150?img=14' }
  ];
  renderStories = ({ item }) => {
    return (
      <View style={{
        flex: 1,
        marginRight: 20, flexDirection: 'column', alignItems: 'center'
      }}>
        <Image
          source={{ uri: item.src }}
          style={{
            borderRadius: tileWidth,
            width: tileWidth,
            height: tileWidth,
            borderWidth: 2.5,
            borderColor: '#eee',
          }}>
        </Image>
        <Text style={{ color: '#fff', fontWeight: 'normal', fontSize: 12, marginTop: 5 }}>{item.key}</Text>
      </View>
    );
  }

  renderPosts = ({ item }) => {
    return (
      <Post></Post>
    );
  }
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#000',
      flexDirection: 'column'
    }}>
      <View>
        <FlatList
          ListHeaderComponent={() =>
            <View>
            <FlatList
              horizontal={true}
              style={{ paddingLeft: 20, marginTop: 10, paddingBottom: 10 }}
              data={stories}
              renderItem={this.renderStories}
            />
            <View style={{ height: 0.5, backgroundColor: '#666' }}></View>
            </View>
          }
          data={[
            { key: '1' }
          ]}
          renderItem={this.renderPosts}
        />
      </View>
    </SafeAreaView>
  );
};

HomeScreen.navigationOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: '#222',
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
  },
  headerLeft: () => (
    <View style={{ marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
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
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Image style={{ marginLeft: 20, paddingTop: 10, height: 23, width: 23, resizeMode: 'contain' }} source={iconDm} />
      </TouchableOpacity>
    </View>
  ),
});

StatusBar.setBarStyle('light-content', true);
StatusBar.backgroundColor = '#000';


export default HomeScreen;
