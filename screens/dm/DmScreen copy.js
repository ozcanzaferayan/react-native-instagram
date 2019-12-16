import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';


import iconBack from '../../img/back.png';
import iconVideoCamera from '../../img/video_camera2.png';
import iconWrite from '../../img/write.png';
import iconSearch from '../../img/search_dm.png';
import imageZafer from '../../img/zafer.jpg';
import imagePhotoCamera from '../../img/photo_camera_gray.png';

const DmScreen = () => {

  renderMessages = ({ item }) => {
    return (
      <View style={{
        flex: 1,
        marginRight: 20, flexDirection: 'column', alignItems: 'center'
      }}>
        <Image
          source={{ uri: item.src }}
          style={{
            borderRadius: tileWidth,
            width: tileWidth,
            height: tileWidth,
            borderWidth: 2.5,
            borderColor: '#eee',
          }}>
        </Image>
        <Text style={{ color: '#fff', fontWeight: 'normal', fontSize: 12, marginTop: 5 }}>{item.key}</Text>
      </View>
    );
  }
  return (
    <FlatList
      style={{ backgroundColor: '#000', }}
      ListHeaderComponent={() =>
        <View>
            <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: '#666', padding: 8, borderRadius: 5 }}>
              <Image source={iconSearch} style={{ width: 15, height: 15 }} />
              <Text style={{ color: '#bbb', marginStart: 10 }}>Ara</Text>
            </View>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>Mesajlar</Text>
        </View>
      }
      data={[
        { key: '1' }
      ]}
      renderItem={this.renderMessages}
    />

    // <View style={{ flex: 1, backgroundColor: 'black', padding: 20 }}>
    //   <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: '#666', padding: 8, borderRadius: 5 }}>
    //     <Image source={iconSearch} style={{ width: 15, height: 15 }} />
    //     <Text style={{ color: '#bbb', marginStart: 10 }}>Ara</Text>
    //   </View>
    //   <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>Mesajlar</Text>
    //   <View style={{  flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between' }}>
    //     <Image source={imageZafer} style={{ width: 50, height: 50, borderRadius: 50 }} />

    //     <View style={{ flex: 1, flexDirection: 'column', marginStart: 20 }}>
    //       <Text style={{ color: '#fff' }}>zaferayan</Text>
    //       <View style={{ flexDirection: 'row', marginRight:50 }} >
    //         <Text style={{ color: '#ddd'}} numberOfLines={1} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    //         <Text style={{ color: '#aaa' }} > · </Text>
    //         <Text style={{ color: '#aaa' }} >1g</Text>
    //       </View>
    //     </View>
    //       <TouchableOpacity>
    //       <Image source={imagePhotoCamera} style={{ width: 25, height: 25 }} />
    //       </TouchableOpacity>
    //   </View>
    // </View>
  );
};

DmScreen.navigationOptions = ({ navigation }) => ({
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

export default DmScreen;
