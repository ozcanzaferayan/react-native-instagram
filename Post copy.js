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

import images from 'res/images';

const Post = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', height:20, paddingStart: 20, paddingEnd: 20}}>
        <Image source={images.zafer} style={{alignSelf:'flex-start', width: 25, height: 25, resizeMode: 'contain'}}/>
        <Image source={require('./img/more.png')} style={{alignSelf:'flex-end', width: 10, height: 10, resizeMode: 'contain'}}/>
      </View>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1575990230677-cbe3765b6197?w=512' }}
        style={{ height: 400 }} />
      <View style={{ paddingStart: 20, paddingEnd: 20, flex:1, flexDirection:'column', paddingTop:15 }}>
        <View style={{ flex:1, flexDirection: 'row'}}>
          <Image source={require('./img/like.png')} style={{width: 25, height: 25, resizeMode: 'contain'}}/>
          <Image source={require('./img/comment.png')} style={{width: 25, height: 25, resizeMode: 'contain', marginLeft:15}}/>
          <Image source={require('./img/dm.png')} style={{width: 25, height: 25, resizeMode: 'contain', marginLeft:15}}/>
          {/*<Image source={require('./img/bookmark.png')} style={{alignSelf:'flex-end', width: 25, height: 25, resizeMode: 'contain', marginLeft:15}}/>*/}
        </View>
        <View style={{ flex:1, flexDirection: 'row', flexWrap: 'wrap'}}><Text style={{ color: '#fff' }}>103 beğenme</Text></View>
        <View style={{ flex:1, flexDirection: 'row', flexWrap: 'wrap'}}><Text style={{ color: '#fff' }}>ozaferayan</Text></View>
        {/* 
        <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#d00' }}>
          <Image source={{ uri: 'https://images.unsplash.com/photo-1575990230677-cbe3765b6197?w=96' }} style={{ width: 100 }} />
        </View>*/}
      </View>
    </View>
  );
};

export default Post;
