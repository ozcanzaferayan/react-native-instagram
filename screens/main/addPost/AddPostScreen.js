import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import colors from 'res/colors';
var RNFS = require("react-native-fs");
import { request, PERMISSIONS } from 'react-native-permissions';

const AddPostScreen = () => {

  listFiles2 = () => {
    request(Platform.OS === 'ios' ? PERMISSIONS.IOS.MEDIA_LIBRARY : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE).then(result => {
      if (result !== 'granted') {
        return;
      }
      RNFS.readDir(Platform.OS === 'ios' ? RNFS.LibraryDirectoryPath : RNFS.PicturesDirectoryPath)
        .then((result) => {
          console.log('GOT RESULT', result);
          return Promise.all([RNFS.stat(result[0].path), result[0].path]);
        })
        .then((statResult) => {
          if (statResult[0].isFile()) {
            return RNFS.readFile(statResult[1], 'utf8');
          }
          return 'no file';
        })
        .then((contents) => {
          console.log(contents);
        })
        .catch((err) => {
          console.log(err.message, err.code);
        });
    });
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
    { key: '14' },
  ];;

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={this.listFiles2}
        style={{ flex: 1, aspectRatio: 1 }}>
        <Image style={{ flex: 1 }} resizeMode='cover' source={{ uri: 'https://picsum.photos/512' }}></Image>
      </TouchableOpacity>
    );
  }
  return (
    <FlatList
      style={{ flex: 1, backgroundColor: colors.background }}
      data={dataSource}
      renderItem={this.renderItem}
      keyExtractor={(item) => item.key}
      numColumns={4}
      ListHeaderComponent={() =>
        <TouchableOpacity
          style={{ flex: 1, aspectRatio: 1 }}
        >
          <Image style={{ flex: 1 }} resizeMode='cover' source={{ uri: 'https://picsum.photos/512' }}></Image>
        </TouchableOpacity>
      }
    />
  );
};

export default AddPostScreen;
