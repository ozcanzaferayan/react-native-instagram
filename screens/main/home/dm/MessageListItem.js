import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
} from 'react-native';
import colors from 'res/colors';
import StoryListItem from 'library/components/StoryListItem';
import images from 'res/images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import strings from 'res/strings';
import prettyTime from 'library/utils/PrettyTime';
import ProfilePicture from 'library/components/ProfilePicture';

const MessageListItem = ({ item }) => {

  return (
    <View style={styles.container}>
      <ProfilePicture item={item} />
      <View style={styles.textContainer}>
        <Text style={stylesParams(item).username}>{item.key}</Text>
        <View style={styles.messageContainer} >
          <Text style={stylesParams(item).message} numberOfLines={1}>
            {
              item.isRead ? item.lastMsg
                : strings.home.dm.messageListItem.sentMessage
            }
          </Text>
          <Text style={stylesParams(item).message}> · </Text>
          <Text style={stylesParams(item).message}>{item.sendTime}</Text>
        </View>
      </View>
      <View style={{ display: item.isRead ? 'none' : 'flex', backgroundColor: '#30ABF1', width: 7, height: 7, borderRadius: 7, marginRight: 10 }}></View>
      <TouchableOpacity>
        <Image source={item.isRead ? images.photo_camera_gray : images.photo_camera} style={{ width: 25, height: 25 }} />
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between'
  },
  textContainer: {
    flex: 1,
    marginStart: 20
  },
  messageContainer: {
    flexDirection: 'row',
    marginRight: 50,
    marginTop: 5
  },
});

const stylesParams = (params) => StyleSheet.create({
  username: {
    color: '#fff',
    fontWeight: params.isRead ? 'normal' : 'bold'
  },
  message: {
    color: params.isRead ? '#ddd' : '#fff',
    fontWeight: params.isRead ? 'normal' : 'bold',
  },
});

export default MessageListItem;