import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
} from 'react-native';
import colors from 'res/colors';
import StoryListItem from 'components/StoryListItem';
import images from 'res/images';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PostBottomActions = ({ post }) => {

  return <View style={styles.container}>
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => console.log('test')}>
        <Image source={images.like} style={{ ...styles.icon, marginLeft: 0 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('test')}>
        <Image source={images.comment} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('test')}>
        <Image source={images.dm} style={styles.icon} />
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => console.log('test')}>
      <Image source={images.bookmark} style={styles.icon} />
    </TouchableOpacity>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 15
  },

});

export default PostBottomActions;