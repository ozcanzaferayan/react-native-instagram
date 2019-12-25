import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
} from 'react-native';
import colors from 'res/colors';
import StoryListItem from 'library/components/StoryListItem';
import images from 'res/images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import strings from 'res/strings';

const PostLikes = ({ post }) => {

  return <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
   <Text style={styles.text}>
     {strings.home.post.likeCount.replace('{0}', post.likeCount)}
     </Text>
  </TouchableOpacity>
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  text: { 
    color: colors.text, 
    fontWeight: 'bold' 
  },

});

export default PostLikes;