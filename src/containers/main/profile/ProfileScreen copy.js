import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  FlatList
} from 'react-native';

import images from 'res/images';
import colors from 'res/colors';
import I18n from 'utils/I18n';

const ProfileScreen = () => {

  const dataSource = [
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4' },
    { key: '5' },
    { key: '6' },
    { key: '7' },
    { key: '8' },
    { key: '9' },
    { key: '10' },
    { key: '11' },
    { key: '12' },
    { key: '13' },
  ];

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ flex: 1, aspectRatio: 1 }}>
        <Image style={{ flex: 1 }} resizeMode='cover' source={{ uri: 'https://picsum.photos/512' }}></Image>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ backgroundColor: '#222', flex: 1, flexDirection: 'column'}}>
      <View style={{padding: 20}}>
      <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
        <Image source={images.zafer} style={{ width: 75, height: 75, borderRadius: 75 }} />
        <View style={{ alignItems: 'center' }} >
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>{I18n.t('activity.header.title')}</Text>
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'normal' }}>Gönderiler</Text>
        </View>
        <View style={{ alignItems: 'center' }} >
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>187</Text>
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'normal' }}>Takipçi</Text>
        </View>
        <View style={{ alignItems: 'center' }} >
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>434</Text>
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'normal' }}>Takip</Text>
        </View>
      </View>
      <Text style={{color: '#fff', marginTop: 10}}>Zafer AYAN</Text>
      <Text style={{color: '#fff', marginTop: 0}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit justo, sodales sit amet pulvinar quis, egestas eu justo. Phasellus elit volutpat.</Text>
      <Text style={{color: '#add8e6'}} onPress={() => Linking.openURL('https://github.com/ozcanzaferayan')}>
        github.com/ozcanzaferayan
      </Text>
      <View alignItems='center' style={{ marginTop: 10,backgroundColor: colors.background, borderColor: '#666', borderRadius:3, borderWidth: 1, padding: 5}}>
      <TouchableOpacity >
        <Text style={{color: '#fff', fontWeight: 'normal'}}>Profili Düzenle</Text>
      </TouchableOpacity>
      </View>

      </View>
      <FlatList
      data={dataSource}
      renderItem={this.renderItem}
      keyExtractor={(item) => item.key}
      numColumns={3}
    />

    </View>
  );
};

export default ProfileScreen;
