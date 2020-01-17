import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
} from 'react-native';
import colors from './node_modules/res/colors';
import StoryListItem from './node_modules/components/StoryListItem';
import images from './node_modules/res/images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import I18n from './node_modules/library/utils/I18n';

const SearchBar = ({ post }) => {

  return <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
    <Image source={images.search} style={styles.image} />
    <Text style={styles.text}>{I18n.t(`home.dm.searchBar.text`)}</Text>
  </TouchableOpacity>
};

const styles = StyleSheet.create({
  container: { 
    alignItems: 'center', 
    flexDirection: 'row', 
    backgroundColor: colors.textFaded3, 
    padding: 8, 
    borderRadius: 5, 
  },
  image: {
    width: 15, 
    height: 15,
  },
  text: {
    color: colors.textFaded2, 
    marginStart: 10, 
  }
});

export default SearchBar;