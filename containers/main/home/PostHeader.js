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

const PostHeader = ({ post }) => {

  return <View style={styles.container}>
    <View style={styles.nameContainer}>
      <Image source={images.zafer} style={styles.personImage} />
      <Text style={styles.personName}>{post.username}</Text>
    </View>
    <Image source={images.more} style={styles.iconMore} />
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingStart: 20,
    paddingEnd: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  personImage: {
    width: 25, 
    height: 25, 
    borderRadius: 25,
  },
  personName: { 
    color: colors.text, 
    marginStart: 10, 
    fontWeight: 'bold' 
  },
  iconMore: { 
    width: 15, 
    height: 15 
  },
});

export default PostHeader;