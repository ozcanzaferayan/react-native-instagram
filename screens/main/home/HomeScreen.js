import React from 'react';
import {
  View,
  FlatList} from 'react-native';

import Post from './Post';

import StoryListItem from 'library/components/StoryListItem';
import colors from 'res/colors';



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
  renderStories = ({ item }) => <StoryListItem item={item}/>

  renderPosts = () => {
    return (
      <Post></Post>
    );
  }
  return (
    <FlatList
      style={{ backgroundColor: colors.background, }}
      ListHeaderComponent={() =>
        <View>
          <FlatList
            horizontal={true}
            style={{ paddingLeft: 20, marginTop: 10, paddingBottom: 10 }}
            data={stories}
            renderItem={this.renderStories}
          />
          <View style={{ height: 0.5, backgroundColor: '#666' }}></View>
        </View>
      }
      data={[
        { key: '1' },
        { key: '2' },
        { key: '3' },
        { key: '4' },
        { key: '5' },
      ]}
      renderItem={(this.renderPosts)}
    />
  );
};

export default HomeScreen;
