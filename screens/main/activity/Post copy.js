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
        <Image source={iconMore} style={{ width: 15, height: 15}} />
      </View>
      <Image source={{ uri: 'https://images.unsplash.com/photo-1575990230677-cbe3765b6197?w=512' }}
        style={{ height: 400 }} />
      <View style={{ paddingStart: 20, paddingEnd: 20, paddingTop: 15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={iconLike} style={{ width: 25, height: 25}} />
            <Image source={iconComment} style={{ width: 25, height: 25, marginLeft: 15 }} />
            <Image source={iconDm} style={{ width: 25, height: 25, marginLeft: 15 }} />
          </View>
            <Image source={iconBookmark} style={{ width: 25, height: 25, marginLeft: 15 }} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}><Text style={{ color: '#fff', fontWeight: 'bold' }}>103 beğenme</Text></View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>ozaferayan</Text>
          <Text style={{ color: '#fff', marginStart: 10 }}>Baharın ilk fotoğrafı.</Text>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}><Text style={{ color: '#999' }}>42 yorumun tümünü gör</Text></View>
        <View style={{ flexDirection: 'row', marginTop: 5 }}><Text style={{ color: '#999', fontSize: 12 }}>1 saat önce</Text></View>
      </View>
    </View>
  );
};

export default Post;
