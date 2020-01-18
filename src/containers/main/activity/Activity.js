import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ProfilePicture from 'components/ProfilePicture';
import ActivityDescription from './ActivityDescription';

const Activity = (props) => {

  return <View style={styles.container}>
    <ProfilePicture item={props.item} size={55} />
    <ActivityDescription item={props.item} />
    <TouchableOpacity>
      <Image source={{ uri: props.item.mentionedImage }} style={styles.mentionedImage} />
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    justifyContent: 'space-between'
  },
  mentionedImage: {
    width: 48,
    height: 48
  },
});

export default Activity;