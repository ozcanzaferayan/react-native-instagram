
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import ReadMore from '../home/ReadMore';

const SearchScreen = () => {

  return (
    <View >
    </View>
  );
};

SearchScreen.navigationOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: '#222',
  },
  headerTintColor: '#FFF',
  headerTitleStyle: {
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
  },
  headerLeft: () => (
    <View style={{ marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.goBack(null)}>
        <Image style={{ height: 25, width: 25 }} source={iconBack} />
        <Text style={{ color: 'white', marginLeft: 20, fontSize: 18 }}>Direct</Text>
      </TouchableOpacity>
    </View>
  ),
  headerRight: () => (
    <View style={{ marginRight: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Image style={{ width: 25, height: 25, resizeMode: 'contain' }} source={iconVideoCamera} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Image style={{ marginLeft: 20, paddingTop: 10, height: 23, width: 23, resizeMode: 'contain' }} source={iconWrite} />
      </TouchableOpacity>
    </View>
  ),
});
export default SearchScreen;