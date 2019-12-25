import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';

import Post from './Post';

import StoryListItem from 'library/components/StoryListItem';
import colors from 'res/colors';
import StoryContainer from './StoryContainer';



const HomeScreen = () => {
  const stories = [
    { key: 'ozaferayan', isStoryInsertable: true, hasStory: false, src: 'https://pbs.twimg.com/profile_images/1122720030800711681/O4gJTgiG_400x400.jpg' },
    { key: 'ngordon', hasStory: true, src: 'https://i.pravatar.cc/150?img=8' },
    { key: 'r_von_rails', hasStory: true, src: 'https://i.pravatar.cc/150?img=9' },
    { key: 'figNelson', hasStory: true, src: 'https://i.pravatar.cc/150?img=10' },
    { key: 'benjaminEv', hasStory: true, src: 'https://i.pravatar.cc/150?img=11' },
    { key: 'gilesPos', hasStory: true, src: 'https://i.pravatar.cc/150?img=12' },
    { key: 'hugh27', hasStory: true, src: 'https://i.pravatar.cc/150?img=13' },
    { key: 'b_guidelines', hasStory: true, src: 'https://i.pravatar.cc/150?img=14' }
  ];

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={() => <StoryContainer stories={stories}/>}
      data={[
        { key: '1' },
        { key: '2' },
        { key: '3' },
        { key: '4' },
        { key: '5' },
      ]}
      renderItem={() => <Post />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  mentionedImage: {
    width: 48,
    height: 48
  },
});

export default HomeScreen;
