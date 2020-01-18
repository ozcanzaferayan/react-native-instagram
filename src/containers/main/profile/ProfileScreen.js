import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

import images from 'res/images';
import colors from 'res/colors';
import I18n from 'utils/I18n';

const ProfileScreen = () => {

  const profileData = {
    name: 'Zafer AYAN',
    url: 'https://github.com/ozcanzaferayan',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi velit justo, sodales sit amet pulvinar quis, egestas eu justo. Phasellus elit volutpat..',
    statistics: {
      posts: 348,
      followers: 187,
      following: 431
    }
  }

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
    <View style={styles.container}>
      <View style={styles.bioContainer}>
        <View style={styles.profileImageSection}>
          <Image source={images.zafer} style={styles.profileImage} />
          <View style={{ alignItems: 'center' }} >
            <Text style={styles.statisticsValue}>{profileData.statistics.posts}</Text>
            <Text style={styles.statisticsTitle}>{I18n.t('profile.statistics.posts')}</Text>
          </View>
          <View style={{ alignItems: 'center' }} >
            <Text style={styles.statisticsValue}>{profileData.statistics.followers}</Text>
            <Text style={styles.statisticsTitle}>{I18n.t('profile.statistics.followers')}</Text>
          </View>
          <View style={{ alignItems: 'center' }} >
            <Text style={styles.statisticsValue}>{profileData.statistics.following}</Text>
            <Text style={styles.statisticsTitle}>{I18n.t('profile.statistics.following')}</Text>
          </View>
        </View>
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.bio}>{profileData.bio}</Text>
        <Text style={styles.link} onPress={() => Linking.openURL(profileData.url)}>
          {profileData.url}
        </Text>
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>{I18n.t('profile.editProfile')}</Text>
        </TouchableOpacity>

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

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tabBackground,
    flex: 1,
  },
  bioContainer: {
    padding: 20,
  },
  profileImageSection: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 75,
  },
  statisticsValue: {
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold',
  },
  statisticsTitle: {
    color: colors.text,
    fontSize: 15,
    fontWeight: 'normal'
  },
  name: {
    color: colors.text,
    marginTop: 10,
  },
  bio: {
    color: colors.text,
    marginTop: 0,
  },
  link: {
    color: colors.link,
  },
  editProfileButton: {
    marginTop: 10,
    backgroundColor: colors.background,
    borderColor: colors.seperator,
    borderRadius: 3,
    borderWidth: 1,
    padding: 5,
  },
  editProfileText: {
    color: colors.text,
    textAlign: 'center',
    fontWeight: 'normal'
  },


});

export default ProfileScreen;
