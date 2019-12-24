import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import images from 'res/images';
import colors from 'res/colors';

const DmScreen = () => {

  const messages = [
    { key: 'ngordon', hasStory: true, isRead: false, src: 'https://i.pravatar.cc/150?img=8', sendTime: 'şimdi', lastMsg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' },
    { key: 'r_von_rails', hasStory: false, isRead: false, src: 'https://i.pravatar.cc/150?img=9', sendTime: '1s', lastMsg: 'eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam' },
    { key: 'figNelson', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=10', sendTime: '3s', lastMsg: '😂' },
    { key: 'benjaminEv', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=11', sendTime: '1g', lastMsg: 'scelerisque viverra mauris in aliquam. Pellentesque elit eget gravida' },
    { key: 'gilesPos', hasStory: true, isRead: true, src: 'https://i.pravatar.cc/150?img=12', sendTime: '2h', lastMsg: 'cum sociis. Id porta nibh venenatis cras sed felis eget velit aliquet.' },
    { key: 'hugh27', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=13', sendTime: '10h', lastMsg: 'Imperdiet dui accumsan sit amet. Sed cras ornare arcu dui vivamus' },
    { key: 'b_guidelines', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=14', sendTime: '20h', lastMsg: 'arcu felis bibendum ut. Scelerisque purus semper eget duis at tellus at' },
    { key: 'ngordon2', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=8', sendTime: '30h', lastMsg: 'urna condimentum. Aliquam sem et tortor consequat id. Lorem sed' },
    { key: 'r_von_rails2', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=9', sendTime: '32h', lastMsg: 'risus ultricies tristique nulla. At quis risus sed vulputate. Consectetur' },
    { key: 'figNelson2', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=10', sendTime: '3s', lastMsg: 'libero id faucibus nisl tincidunt. Id semper risus in hendrerit gravida' },
    { key: 'benjaminEv2', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=11', sendTime: '1g', lastMsg: 'rutrum quisque non tellus. Nibh ipsum consequat nisl vel pretium' },
    { key: 'gilesPos2', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=12', sendTime: '2h', lastMsg: 'lectus quam id leo. Massa sapien faucibus et molestie. Semper eget' },
    { key: 'hugh272', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=13', sendTime: '10h', lastMsg: 'duis at tellus at urna condimentum. Duis convallis convallis tellus id' },
    { key: 'b_guidelines2', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=14', sendTime: '20h', lastMsg: 'interdum velit laoreet. Velit aliquet sagittis id consectetur purus.' },
  ];

  renderPosts = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, justifyContent: 'space-between' }}>


    <LinearGradient 
      colors={item.hasStory ? ['#feda75', '#d62976'] : []}
      start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
      useAngle={true}
      angle={45}
      style={{ height: 64, width: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center'}}
    >
          <Image source={{ uri: item.src }} style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 3, borderColor: colors.background }} />
        </LinearGradient>    


        <View style={{ flex: 1, flexDirection: 'column', marginStart: 20 }}>
          <Text style={{ color: '#fff', fontWeight: item.isRead ? 'normal' : 'bold' }}>{item.key}</Text>
          <View style={{ flexDirection: 'row', marginRight: 50, marginTop: 5 }} >
            <Text style={{ color: item.isRead ? '#ddd' : '#fff', fontWeight: item.isRead ? 'normal' : 'bold', }} numberOfLines={1} >{ item.isRead ? item.lastMsg : 'Bir mesaj gönderdi'}</Text>
            <Text style={{ color: item.isRead ? '#aaa' : '#fff', fontWeight: item.isRead ? 'normal' : 'bold', }} > · </Text>
            <Text style={{ color: item.isRead ? '#aaa' : '#fff', fontWeight: item.isRead ? 'normal' : 'normal', }} >{item.sendTime}</Text>
          </View>
        </View>
        <View style={{ display: item.isRead ? 'none' : 'flex', backgroundColor: '#30ABF1', width: 7, height: 7, borderRadius: 7, marginRight: 10}}></View>
        <TouchableOpacity>
          <Image source={item.isRead ? images.photo_camera_gray : images.photo_camera} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <FlatList
      style={{ backgroundColor: colors.background, padding: 20 }}
      ListHeaderComponent={() =>
        <View>
          <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: '#666', padding: 8, borderRadius: 5 }}>
            <Image source={images.search} style={{ width: 15, height: 15 }} />
            <Text style={{ color: '#bbb', marginStart: 10 }}>Ara</Text>
          </View>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>Mesajlar</Text>
        </View>
      }
      data={messages}
      renderItem={this.renderPosts}
    />
  );
  return (

    <View style={styles.container}>
    <LinearGradient 
      colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
      start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
      style={{ height: 48, width: 200, alignItems: 'center', justifyContent: 'center'}}
    >
    <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>
          LOGIN
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  buttonContainer: {
      width: 200,
      alignItems: 'center',
  },
  buttonText: {
      textAlign: 'center',
      color: '#4C64FF',
      padding: 15,
      marginLeft: 1,
      marginRight: 1,
      width: 200
  }
});

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
        <Image style={{ height: 25, width: 25 }} source={images.back} />
        <Text style={{ color: 'white', marginLeft: 20, fontSize: 18 }}>Direct</Text>
      </TouchableOpacity>
    </View>
  ),
  headerRight: () => (
    <View style={{ marginRight: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Image style={{ width: 25, height: 25, resizeMode: 'contain' }} source={images.video_camera} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Image style={{ marginLeft: 20, paddingTop: 10, height: 23, width: 23, resizeMode: 'contain' }} source={images.write} />
      </TouchableOpacity>
    </View>
  ),
});

export default DmScreen;
