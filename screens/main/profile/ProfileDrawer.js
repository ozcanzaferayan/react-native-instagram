import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  SafeAreaView
} from 'react-native';
import ProfileDrawerItem from './ProfileDrawerItem';

import iconPast from '../../../img/past.png';
import iconQr from '../../../img/qr_code.png';
import iconBookmark from '../../../img/bookmark.png';
import iconFriendship from '../../../img/friendship.png';
import iconAddUser from '../../../img/add_user.png';
import iconFacebook from '../../../img/facebook.png';
import iconSettings from '../../../img/settings_drawer.png';


const ProfileDrawer = () => {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000', justifyContent: 'space-between' }}>
      <View>
        <Text style={{ color: '#fff', padding: 20, paddingTop: 10, paddingBottom: 14, fontSize: 16, fontWeight: 'bold' }}>ozaferayan</Text>
        <View style={{ backgroundColor: '#222', height: 0.5 }}></View>
        <ProfileDrawerItem icon={iconPast} text='Arşiv' />
        <ProfileDrawerItem icon={iconQr} text='Ad Etiketi' />
        <ProfileDrawerItem icon={iconBookmark} text='Kaydedilenler' />
        <ProfileDrawerItem icon={iconFriendship} text='Yakın Arkadaşlar' />
        <ProfileDrawerItem icon={iconAddUser} text='Yeni İnsanlar Keşfet' />
        <ProfileDrawerItem icon={iconFacebook} text="Facebook'u aç" />
      </View>
      <View>
        <View style={{ backgroundColor: '#222', height: 0.5 }}></View>
        <ProfileDrawerItem icon={iconSettings} text="Ayarlar" isInBottom={true} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileDrawer;
