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

import LinearGradient from 'react-native-linear-gradient';
import Post from './Post';

import iconAddStory from '../../../img/add_story.png';


const HomeScreen = () => {
  const stories = [
    { key: 'ozaferayan', hasStory: false, src: 'https://pbs.twimg.com/profile_images/1122720030800711681/O4gJTgiG_400x400.jpg' },
    { key: 'ngordon', hasStory: true, src: 'https://i.pravatar.cc/150?img=8' },
    { key: 'r_von_rails', hasStory: true, src: 'https://i.pravatar.cc/150?img=9' },
    { key: 'figNelson', hasStory: true, src: 'https://i.pravatar.cc/150?img=10' },
    { key: 'benjaminEv', hasStory: true, src: 'https://i.pravatar.cc/150?img=11' },
    { key: 'gilesPos', hasStory: true, src: 'https://i.pravatar.cc/150?img=12' },
    { key: 'hugh27', hasStory: true, src: 'https://i.pravatar.cc/150?img=13' },
    { key: 'b_guidelines', hasStory: true, src: 'https://i.pravatar.cc/150?img=14' }
  ];
  renderStories = ({ item }) => {
    return (
      <View style={{
        flex: 1,
        marginRight: 15, flexDirection: 'column', alignItems: 'center'
      }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <LinearGradient
            colors={item.hasStory ? ['#feda75', '#d62976'] : []}
            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
            useAngle={true}
            angle={45}
            style={{ height: 64, width: 64, borderRadius: 64, alignItems: 'center', justifyContent: 'center' }}
          >
            <Image
              source={{ uri: item.src }}
              style={{
                borderRadius: 60,
                width: 60,
                height: 60,
                borderWidth: item.hasStory ? 3 : 0,
                borderColor: '#000',
              }} />
          </LinearGradient>
          <View style={{ display: item.hasStory ? 'none' : 'flex', position:'absolute', top: 45, start: 45, backgroundColor: '#30ABF1', width: 20, height: 20, borderRadius: 20, borderWidth: 3, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={iconAddStory} style={{width: 8, height: 8}} resizeMode='contain' />
          </View>
        </View>
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
    <FlatList
      style={{ backgroundColor: '#000', }}
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
        { key: '1' },
        { key: '2' },
        { key: '3' },
        { key: '4' },
        { key: '5' },
      ]}
      renderItem={this.renderPosts}
    />
  );
};

export default HomeScreen;
