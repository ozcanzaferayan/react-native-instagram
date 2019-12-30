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
import I18n from 'library/utils/I18n';

const PostComments = ({ post }) => {

  return <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
    <Text style={styles.text}>
      {I18n.t('home.post.likeCount').replace('{0}', post.likeCount)}
    </Text>
  </TouchableOpacity>
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5
  },
  text: {
    color: colors.textFaded2,
  }
});

export default PostComments;