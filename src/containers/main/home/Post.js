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
import PostHeader from './PostHeader';
import PostBottomActions from './PostBottomActions';
import PostLikes from './PostLikes';
import PostDescription from './PostDescription';
import PostComments from './PostComments';
import PostPublishDate from './PostPublishDate';

const post = {
  username: 'ozaferayan',
  imgUrl: 'https://picsum.photos/512',
  likeCount: 103,
  commentCount: 42,
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  publishedAt: '2019-11-24T17:28:31.123Z',
}

const Post = () => {
  return (
    <React.Fragment>
      <PostHeader post={post}/>
      <Image source={{ uri: post.imgUrl }} style={styles.postImg} />
      <View style={styles.postBottomContainer}>
        <PostBottomActions post={post}/>
        <PostLikes post={post}/>
        <PostDescription post={post}/>
        <PostComments post={post}/>
        <PostPublishDate post={post}/>
      </View>
    </React.Fragment>
  );
};


const styles = StyleSheet.create({
  postImg: { 
    height: 400, 
  },
  postBottomContainer: { 
    paddingStart: 20, 
    paddingEnd: 20, 
    paddingTop: 15, 
  },
});

export default Post;
