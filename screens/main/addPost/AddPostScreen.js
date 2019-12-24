import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import colors from 'res/colors';

const AddPostScreen = () => {
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
      <FlatList
      style={{ flex: 1, backgroundColor: colors.background }}
      data={dataSource}
      renderItem={this.renderItem}
      keyExtractor={(item) => item.key}
      numColumns={4}
      ListHeaderComponent={() =>
        <TouchableOpacity
          style={{ flex: 1, aspectRatio: 1 }}>
        <Image style={{ flex: 1 }} resizeMode='cover' source={{ uri: 'https://picsum.photos/512' }}></Image>
      </TouchableOpacity>
      }
      />
    );
  };
  
  export default AddPostScreen;
  