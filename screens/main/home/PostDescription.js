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

const PostDescription = ({ post }) => {


renderTruncatedFooter = (handlePress) => {
  return (
    <Text style={{ color: '#999' }} onPress={handlePress}>
      read more
    </Text>
  );
}

renderRevealedFooter = (handlePress) => {
  return;
}

  return (
    <View style={styles.container}>
      <Text numberOfLines={2} ellipsizeMode='tail' 
      // renderTruncatedFooter={this.renderTruncatedFooter}
      // renderRevealedFooter={this.renderRevealedFooter}
      >
        <TouchableOpacity onPress={() => console.log('test')}>
          <Text style={styles.username}>{post.username}</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{post.text}</Text>
      </Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 5
  },
  username: {
    color: colors.text,
    fontWeight: 'bold'
  },
  text: {
    color: colors.text,
  },

});

export default PostDescription;