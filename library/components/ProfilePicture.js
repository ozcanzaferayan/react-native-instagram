import React from 'react';
import {
  View,
  Image} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import images from 'res/images';

const ProfilePicture = (props) => 
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    <LinearGradient
      colors={props.item.hasStory ? ['#feda75', '#d62976'] : []}
      start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
      useAngle={true}
      angle={45}
      style={{ height: 64, width: 64, borderRadius: 64, alignItems: 'center', justifyContent: 'center' }}
    >
      <Image
        source={{ uri: props.item.src }}
        style={{
          borderRadius: 60,
          width: 60,
          height: 60,
          borderWidth: props.item.hasStory ? 3 : 0,
          borderColor: '#000',
        }} />
    </LinearGradient>
    <View style={{ display: props.item.hasStory ? 'none' : 'flex', position:'absolute', top: 45, start: 45, backgroundColor: '#30ABF1', width: 20, height: 20, borderRadius: 20, borderWidth: 3, borderColor: '#000', alignItems: 'center', justifyContent: 'center' }}>
      <Image source={images.add_story} style={{width: 8, height: 8}} resizeMode='contain' />
    </View>
  </View>;

export default ProfilePicture;