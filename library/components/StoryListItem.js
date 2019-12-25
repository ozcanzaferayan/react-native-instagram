import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import ProfilePicture from './ProfilePicture';
import colors from 'res/colors';

const StoryListItem = (props) => {
  return <View style={styles.container}>
    <ProfilePicture item={props.item} />
    <Text style={styles.name}>{props.item.key}</Text>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 15,
    alignItems: 'center'
  },
  name: {
    color: colors.text,
    fontWeight: 'normal',
    fontSize: 12,
    marginTop: 5
  },
});

export default StoryListItem;