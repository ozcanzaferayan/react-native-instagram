import React, { useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
} from 'react-native';

import Post from './Post';
import { loadStories } from 'actions';

import StoryListItem from 'components/StoryListItem';
import colors from 'res/colors';
import StoryContainer from './StoryContainer';
import { connect } from 'react-redux';



const HomeScreen = (props) => {
  const binId = 'h4076'
  useEffect(() => {
    async function loadStories() {
      await props.loadStories(binId)
    }
    loadStories()
  }, []);

  onRefresh = () => {
    props.loadStories(binId)
  };

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={() => <StoryContainer stories={props.arrayStories} />}
      data={[
        { key: '1' },
        { key: '2' },
        { key: '3' },
        { key: '4' },
        { key: '5' },
      ]}
      renderItem={() => <Post />}
      refreshControl={
        <RefreshControl
          style={styles.loader}
          refreshing={props.isLoading}
          onRefresh={this.onRefresh}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  loader: {
    backgroundColor: colors.tabBackground,
  },
  mentionedImage: {
    width: 48,
    height: 48
  },
});

const mapStateToProps = (state) => {
  const {
    entities: { stories },
    errorMessage,
    isLoading
  } = state;
  const arrayStories = Object.entries(stories).map(x => x[1]);
  return {
    errorMessage,
    isLoading,
    arrayStories
  };
}

const mapDispatchToProps = {
  loadStories
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);