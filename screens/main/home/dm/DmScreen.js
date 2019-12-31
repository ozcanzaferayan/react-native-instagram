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
import MessageListItem from './MessageListItem';
import SearchBar from './SearchBar';
import I18n from 'library/utils/I18n';

const DmScreen = () => {

  const messages = [
    { key: 'ngordon', hasStory: true, isRead: false, src: 'https://i.pravatar.cc/150?img=8', sendTime: '2019-12-31T00:00:00', lastMsg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' },
    { key: 'r_von_rails', hasStory: false, isRead: false, src: 'https://i.pravatar.cc/150?img=9', sendTime: '2019-12-30T23:00:00', lastMsg: 'eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam' },
    { key: 'figNelson', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=10', sendTime: '2019-12-30T20:00:00', lastMsg: '😂' },
    { key: 'benjaminEv', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=11', sendTime: '2019-12-30T00:00:00', lastMsg: 'scelerisque viverra mauris in aliquam. Pellentesque elit eget gravida' },
    { key: 'gilesPos', hasStory: true, isRead: true, src: 'https://i.pravatar.cc/150?img=12', sendTime: '2019-12-20T00:00:00', lastMsg: 'cum sociis. Id porta nibh venenatis cras sed felis eget velit aliquet.' },
    { key: 'hugh27', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=13', sendTime: '2019-11-10T00:00:00', lastMsg: 'Imperdiet dui accumsan sit amet. Sed cras ornare arcu dui vivamus' },
    { key: 'b_guidelines', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=14', sendTime: '2019-10-10T00:00:00', lastMsg: 'arcu felis bibendum ut. Scelerisque purus semper eget duis at tellus at' },
    { key: 'ngordon2', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=8', sendTime: '2019-09-10T00:00:00', lastMsg: 'urna condimentum. Aliquam sem et tortor consequat id. Lorem sed' },
    { key: 'r_von_rails2', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=9', sendTime: '2019-01-10T00:00:00', lastMsg: 'risus ultricies tristique nulla. At quis risus sed vulputate. Consectetur' },
    { key: 'figNelson2', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=10', sendTime: '2018-12-10T00:00:00', lastMsg: 'libero id faucibus nisl tincidunt. Id semper risus in hendrerit gravida' },
    { key: 'benjaminEv2', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=11', sendTime: '2018-11-10T00:00:00', lastMsg: 'rutrum quisque non tellus. Nibh ipsum consequat nisl vel pretium' },
    { key: 'gilesPos2', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=12', sendTime: '2018-10-10T00:00:00', lastMsg: 'lectus quam id leo. Massa sapien faucibus et molestie. Semper eget' },
    { key: 'hugh272', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=13', sendTime: '2018-09-10T00:00:00', lastMsg: 'duis at tellus at urna condimentum. Duis convallis convallis tellus id' },
    { key: 'b_guidelines2', hasStory: false, isRead: true, src: 'https://i.pravatar.cc/150?img=14', sendTime: '2018-08-10T00:00:00', lastMsg: 'interdum velit laoreet. Velit aliquet sagittis id consectetur purus.' },
  ];

  renderMessages = ({ item }) => {
    return <MessageListItem item={item}/>
  }
  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={() =>
        <React.Fragment>
          <SearchBar />
          <Text style={styles.header}>{I18n.t('home.dm.bodyTitle')}</Text>
        </React.Fragment>
      }
      data={messages}
      renderItem={this.renderMessages}
    />
  );
};


DmScreen.navigationOptions = ({ navigation }) => ({
  headerStyle: {
    backgroundColor: colors.tabBackground,
  },
  headerTintColor: colors.text,
  headerTitleStyle: {
    fontFamily: Platform.OS === 'ios' ? 'Futura' : 'Roboto',
  },
  headerLeft: () => (
    <View style={styles.headerLeftContainer}>
      <TouchableOpacity style={styles.headerLeftBackButton} onPress={() => navigation.goBack(null)}>
        <Image style={styles.headerLeftBackButtonImage} source={images.back} />
        <Text style={styles.headerLeftBackButtonText}>{I18n.t('home.dm.appBarTitle')}</Text>
      </TouchableOpacity>
    </View>
  ),
  headerRight: () => (
    <View style={styles.headerRightContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Image style={styles.headerRightCamera} source={images.video_camera} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Image style={styles.headerRightDm} source={images.write} />
      </TouchableOpacity>
    </View>
  ),
});

const styles = StyleSheet.create({
  container: { backgroundColor: colors.background, padding: 20 },
  header: { color: colors.text, fontSize: 16, fontWeight: 'bold', marginTop: 20 },
  headerLeftContainer: { marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'center' },
  headerLeftBackButton: { flexDirection: 'row' },
  headerLeftBackButtonImage: { height: 25, width: 25 },
  headerLeftBackButtonText: { color: colors.text, marginLeft: 20, fontSize: 18 },
  headerRightContainer: { marginRight: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' },
  headerRightCamera: { width: 25, height: 25, resizeMode: 'contain' },
  headerRightDm: { marginLeft: 20, paddingTop: 10, height: 23, width: 23, resizeMode: 'contain' },
});

export default DmScreen;
