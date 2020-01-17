import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import images from 'res/images';
import colors from 'res/colors';

const ProfilePicture = (props) => {

  const params = {
    size: props.size || 64,
    get borderSize() { return this.size * 6 / 100 },
    get innerBorderSize() { return this.size * 3 / 100 },
    get innerCircleSize(){ return this.size - this.borderSize },
    get profileImgBorderSize(){ return props.item.hasStory ? this.innerBorderSize : 0},
    notificationSize: 15,
    get notificationPositionTop(){ return this.size * 1 / 12},
    get notificationPositionStart(){ return this.size * 8 / 12},
    get insertStoryTop() {return this.size * 8 / 12},
    get insertStoryStart() {return  this.size * 8 / 12},
  }

  return <View style={styles.container}>
    <LinearGradient
      colors={
        props.item.isStoryRead ? colors.storyRead
          : props.item.hasStory ? colors.storyGradient
          : [colors.background, colors.background]}
      start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
      useAngle={true}
      angle={45}
      style={styles(params).storyRing}
    >
      <Image
        source={{ uri: props.item.src }}
        style={styles(params).profileImg} />
    </LinearGradient>
    {!props.item.hasStory && props.item.isStoryInsertable &&
      <View style={styles(params).insertIconContainer}>
        <Image source={images.add_story} 
        style={styles(params).insertIcon} 
        resizeMode='contain' />
      </View>
    }
    {props.item.notificationCount &&
      <View style={styles(params).notificationContainer}>
        <Text style={styles(params).notificationText}>{props.item.notificationCount}</Text>
      </View>
    }
  </View>
};

const styles = (params) => StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  storyRing: {
    height: params.size,
    width: params.size,
    borderRadius: params.size,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImg: {
     width: params.innerCircleSize,
     height: params.innerCircleSize,
    borderRadius: params.innerCircleSize,
    borderWidth: params.profileImgBorderSize,
    borderColor: colors.background,
  },
  insertIconContainer: {
    position: 'absolute',
    alignItems: 'center', 
    justifyContent: 'center',
    top: params.insertStoryTop,
    start: params.insertStoryStart,
    backgroundColor: colors.storyAdd, 
    width: 20, 
    height: 20, 
    borderRadius: 20, 
    borderWidth: 3, 
    borderColor: colors.background, 
  },
  insertIcon: {
    width: 8, 
    height: 8 
  },
  notificationContainer: {
    position: 'absolute',
    alignItems: 'center', 
    justifyContent: 'center',
    top: params.notificationPositionTop,
    start: params.notificationPositionStart,
    backgroundColor: colors.storyNotification, 
    width: params.notificationSize, 
    height: params.notificationSize, 
    borderRadius: params.notificationSize, 
  },
  notificationText: { 
    fontSize: 10, 
    color: colors.text, 
    fontWeight: 'bold' 
  }
});

export default ProfilePicture;