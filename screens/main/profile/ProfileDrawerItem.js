import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { SafeAreaView } from 'react-navigation';


const ProfileDrawerItem = (props) => {

  return (
    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 16, marginStart: 20, alignItems: 'center',
    marginBottom: props.isInBottom === undefined || props.isInBottom === false ? 0 : 16 }}>
      <Image source={props.icon} style={{ width: 25, height: 25 }} resizeMode='contain' />
      <Text style={{ color: '#fff', marginStart: 20, fontSize: 16 }}>{props.text}</Text>
    </TouchableOpacity>

  );
};

export default ProfileDrawerItem;
