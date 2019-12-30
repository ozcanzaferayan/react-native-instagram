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
import prettyTime from 'library/utils/prettyTime';
import I18n from 'library/utils/I18n';

const PostPublishDate = ({ post }) => {

  return <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
    <Text style={styles.text}>
      {prettyTime(I18n.t('prettyTime.long'), post.publishedAt)}
    </Text>
  </TouchableOpacity>
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5
  },
  text: {
    color: colors.textFaded2,
    fontSize: 12,
  }
});

export default PostPublishDate;