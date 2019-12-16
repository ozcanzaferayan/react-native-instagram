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
import ReadMore from './ReadMore';

import iconZafer from '../../img/zafer.jpg';
import iconMore from '../../img/more.png';
import iconLike from '../../img/like.png';
import iconComment from '../../img/comment.png';
import iconDm from '../../img/dm.png';
import iconBookmark from '../../img/bookmark.png';


const Post = () => {
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, paddingBottom: 12, paddingStart: 20, paddingEnd: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
          <Image source={iconZafer} style={{ width: 25, height: 25, borderRadius: 25, }} />
          <Text style={{ color: '#fff', marginStart: 10, fontWeight: 'bold' }}>ozaferayan</Text>
        </View>
        <Image source={iconMore} style={{ width: 15, height: 15 }} />
      </View>
      <Image source={{ uri: 'https://picsum.photos/512' }}
        style={{ height: 400 }} />
      <View style={{ paddingStart: 20, paddingEnd: 20, paddingTop: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={iconLike} style={{ width: 25, height: 25 }} />
            <Image source={iconComment} style={{ width: 25, height: 25, marginLeft: 15 }} />
            <Image source={iconDm} style={{ width: 25, height: 25, marginLeft: 15 }} />
          </View>
          <Image source={iconBookmark} style={{ width: 25, height: 25, marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}><Text style={{ color: '#fff', fontWeight: 'bold' }}>103 beğenme</Text></View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text numberOfLines={2} ellipsizeMode='tail'
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>ozaferayan</Text>
            <Text style={{ color: '#fff' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
          </Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}><Text style={{ color: '#999' }}>42 yorumun tümünü gör</Text></View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}><Text style={{ color: '#999', fontSize: 12 }}>1 saat önce</Text></View>
      </View>
    </View>
  );
};

_renderTruncatedFooter = (handlePress) => {
  return (
    <Text style={{color: '#999'}} onPress={handlePress}>
      read more
    </Text>
  );
}

_renderRevealedFooter = (handlePress) => {
  return;
}

export default Post;
