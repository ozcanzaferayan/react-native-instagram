import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import colors from 'res/colors';
import ReadMore from 'react-native-read-more-text';
import I18n from 'utils/I18n';

const PostDescription = ({ post }) => {


  renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={styles.readMoreText} onPress={handlePress}>
        {I18n.t('home.post.readMore')}
      </Text>
    );
  }

  renderRevealedFooter = () => {
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