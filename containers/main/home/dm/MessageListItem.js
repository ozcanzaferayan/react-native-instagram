import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  Text,
} from 'react-native';
import colors from 'res/colors';
import StoryListItem from 'components/StoryListItem';
import images from 'res/images';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProfilePicture from 'components/ProfilePicture';
import I18n from 'utils/I18n';
import prettyTime from 'utils/prettyTime';
import { connect } from 'react-redux';
import { markRead } from "actions";

const MessageListItem = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => props.markRead({id: props.item.key, data: props.item })}>
      <ProfilePicture item={props.item} />
      <View style={styles.textContainer}>
        <Text style={stylesParams(props.item).username}>{props.item.key}</Text>
        <View style={styles.messageContainer} >
          <Text style={stylesParams(props.item).message} numberOfLines={1}>
            { props.item.isRead ? props.item.lastMsg : I18n.t('home.dm.messageListItem.sentMessage') }
          </Text>
          <Text style={stylesParams(props.item).message}> · </Text>
          <Text style={stylesParams(props.item).message}>{prettyTime(I18n.t('prettyTime.short'), props.item.sendTime)}</Text>
        </View>
      </View>
      { !props.item.isRead && <View style={styles.unreadIndicator} /> }
      <TouchableOpacity>
        <Image source={props.item.isRead ? images.photo_camera_gray : images.photo_camera} style={styles.cameraImage} />
      </TouchableOpacity>
    </TouchableOpacity>
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
  unreadIndicator: { 
    backgroundColor: colors.storyAdd, 
    width: 7, 
    height: 7, 
    borderRadius: 7, 
    marginRight: 10 
  },
  cameraImage: { 
    width: 25, 
    height: 25 
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

const mapStateToProps = (state) => state
const mapDispatchToProps = { markRead }

export default connect(mapStateToProps, mapDispatchToProps)(MessageListItem);

