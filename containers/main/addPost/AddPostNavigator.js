import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import images from 'res/images';
import palette from 'res/palette';
import AddPostScreen from './AddPostScreen';
import colors from 'res/colors';
import { Dropdown } from 'react-native-material-dropdown';


const AddPostNavigator = createStackNavigator({
  Home: {
    screen: AddPostScreen,
    navigationOptions: ({ navigation }) => ({
      ...palette.header,
      headerLeft: () => (
        <View style={styles.headerLeftContainer}>
          <Image style={styles.headerLeftImage} source={images.close} />
          <Dropdown
            baseColor={colors.text}
            containerStyle={{
              width: 70,
              justifyContent: 'center',
              marginLeft: 15,
              borderBottomWidth: 0,
            }}
            label='Galeri'
            data={[{
              value: 'Fotoğraflar',
            }, {
              value: 'Videolar',
            }, {
              value: 'Instagram',
            }]}
          />
        </View>
      ),
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Info')}>
            <Text style={styles.headerRightText} >İleri</Text>
          </TouchableOpacity>
        </View>
      ),
    })
  }
});

const styles = StyleSheet.create({
  headerLeftContainer: { ...palette.header.headerLeftContainer },
  headerLeftImage: {...palette.header.image},
  headerRightContainer: { ...palette.header.headerRightContainer },
  headerRightImage: {...palette.header.image},
  headerRightText: { color: colors.storyAdd, marginLeft: 10, fontSize: 18 },
});

export default AddPostNavigator;
