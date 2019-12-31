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
import ReadMore from 'react-native-read-more-text';
import I18n from 'library/utils/I18n';

const PostDescription = ({ post }) => {


  renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={styles.readMoreText} onPress={handlePress}>
        {I18n.t('home.post.readMore')}
      </Text>
    );
  }

  renderRevealedFooter = (handlePress) => {
    return;
  }

  return (
    <View style={styles.container}>
      <ReadMore
        numberOfLines={3}
        renderTruncatedFooter={this.renderTruncatedFooter}
        renderRevealedFooter={this.renderRevealedFooter}>
        <Text style={styles.username}>
          {post.username}
        </Text>
        <Text style={styles.text}>
          {' ' + post.text}
        </Text>
      </ReadMore>
    </View>
  );

};



const styles = StyleSheet.create({
  container: {
    marginTop: 5,
  },
  username: {
    color: colors.text,
    fontWeight: 'bold',
  },
  text: {
    color: colors.text,
  },
  readMoreText: {
    color: colors.textFaded2,
    marginTop: 5
  },
});

export default PostDescription;