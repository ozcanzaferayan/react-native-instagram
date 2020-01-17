import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import colors from 'res/colors';
import StoryListItem from 'components/StoryListItem';

const StoryContainer = ({ stories }) => {
  return <React.Fragment>
    <FlatList
      horizontal={true}
      style={styles.container}
      data={stories}
      renderItem={({ item }) => <StoryListItem item={item} />}
    />
    <View style={styles.seperator}></View>
  </React.Fragment>;
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    marginTop: 10,
    paddingBottom: 10
  },
  seperator: {
    height: 0.5,
    backgroundColor: colors.seperator
  },
});

export default StoryContainer;