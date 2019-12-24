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
import colors from 'res/colors';
import ProfilePicture from 'library/components/ProfilePicture';
import activityTypes from './ActivityTypes';
import ActivityDescription from './ActivityDescription';
import Activity from './Activity';
import strings from 'res/strings';

const ActivityScreen = () => {

  const allMessages = [
    {
      key: 'today',
      messages: [
        { key: 'ngordon', hasStory: true, activityType: activityTypes.MENTION, src: 'https://i.pravatar.cc/150?img=8', sendTime: 'şimdi', lastMsg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor', mentionedImage: 'https://picsum.photos/512' },
        { key: 'r_von_rails', hasStory: false, activityType: activityTypes.LIKE, src: 'https://i.pravatar.cc/150?img=9', sendTime: '1s', lastMsg: 'eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam', mentionedImage: 'https://picsum.photos/512' },
        { key: 'figNelson', hasStory: false, activityType: activityTypes.MENTION, src: 'https://i.pravatar.cc/150?img=10', sendTime: '3s', lastMsg: '😂', mentionedImage: 'https://picsum.photos/512' },
      ]
    }, {
      key: 'tomorrow',
      messages: [
        { key: 'benjaminEv', hasStory: false, activityType: activityTypes.MENTION, src: 'https://i.pravatar.cc/150?img=11', sendTime: '1g', lastMsg: 'scelerisque viverra mauris in aliquam. Pellentesque elit eget gravida', mentionedImage: 'https://picsum.photos/512' },
        { key: 'gilesPos', hasStory: true, activityType: activityTypes.MENTION, src: 'https://i.pravatar.cc/150?img=12', sendTime: '1g', lastMsg: 'cum sociis. Id porta nibh venenatis cras sed felis eget velit aliquet.', mentionedImage: 'https://picsum.photos/512' },
      ]
    }, {
      key: 'thisWeek',
      messages: [
        { key: 'hugh27', hasStory: false, activityType: activityTypes.MENTION, src: 'https://i.pravatar.cc/150?img=13', sendTime: '2g', lastMsg: 'Imperdiet dui accumsan sit amet. Sed cras ornare arcu dui vivamus', mentionedImage: 'https://picsum.photos/512' },
        { key: 'b_guidelines', hasStory: false, activityType: activityTypes.MENTION, src: 'https://i.pravatar.cc/150?img=14', sendTime: '3g', lastMsg: 'arcu felis bibendum ut. Scelerisque purus semper eget duis at tellus at', mentionedImage: 'https://picsum.photos/512' },
        { key: 'ngordon2', hasStory: false, activityType: activityTypes.MENTION, src: 'https://i.pravatar.cc/150?img=8', sendTime: '5g', lastMsg: 'urna condimentum. Aliquam sem et tortor consequat id. Lorem sed', mentionedImage: 'https://picsum.photos/512' },
      ]
    }, {
      key: 'thisMonth',
      messages: [
        { key: 'r_von_rails2', hasStory: false, activityType: activityTypes.MENTION, src: 'https://i.pravatar.cc/150?img=9', sendTime: '1h', lastMsg: 'risus ultricies tristique nulla. At quis risus sed vulputate. Consectetur', mentionedImage: 'https://picsum.photos/512' },
        { key: 'figNelson2', hasStory: false, activityType: activityTypes.MENTION, src: 'https://i.pravatar.cc/150?img=10', sendTime: '2h', lastMsg: 'libero id faucibus nisl tincidunt. Id semper risus in hendrerit gravida', mentionedImage: 'https://picsum.photos/512' },
        { key: 'benjaminEv2', hasStory: false, activityType: activityTypes.MENTION, src: 'https://i.pravatar.cc/150?img=11', sendTime: '3h', lastMsg: 'rutrum quisque non tellus. Nibh ipsum consequat nisl vel pretium', mentionedImage: 'https://picsum.photos/512' },
      ]
    }, {
      key: 'earlier',
      messages: [
        { key: 'gilesPos2', hasStory: false, activityType: activityTypes.MENTION, src: 'https://i.pravatar.cc/150?img=12', sendTime: '5h', lastMsg: 'lectus quam id leo. Massa sapien faucibus et molestie. Semper eget', mentionedImage: 'https://picsum.photos/512' },
        { key: 'hugh272', hasStory: false, activityType: activityTypes.MENTION, src: 'https://i.pravatar.cc/150?img=13', sendTime: '6h', lastMsg: 'duis at tellus at urna condimentum. Duis convallis convallis tellus id', mentionedImage: 'https://picsum.photos/512' },
        { key: 'b_guidelines2', hasStory: false, activityType: activityTypes.MENTION, src: 'https://i.pravatar.cc/150?img=14', sendTime: '8h', lastMsg: 'interdum velit laoreet. Velit aliquet sagittis id consectetur purus.', mentionedImage: 'https://picsum.photos/512' },
      ]
    },
  ];

  const notification =
    { src: 'https://picsum.photos/512', notificationCount: 6 };


  renderHeaderDate = (item) => {
    return <Text style={styles.headerDate}>
      {
        (function () {
          switch (item.key) {
            case 'today': return strings.activity.headerDates.today;
            case 'tomorrow': return strings.activity.headerDates.tomorrow;
            case 'thisWeek': return strings.activity.headerDates.thisWeek;
            case 'thisMonth': return strings.activity.headerDates.thisMonth;
            case 'earlier': return strings.activity.headerDates.earlier;
            default: return strings.activity.headerDates.earlier;
          }
        })()
      }
    </Text>
  }

  
  
  
  renderHeaderDateEquals = (item) => {
    return <Text style={styles.headerDate}>
      {
        item.key === 'today' ? strings.activity.headerDates.today :
        item.key === 'tomorrow' ? strings.activity.headerDates.tomorrow :
        item.key === 'thisWeek' ? strings.activity.headerDates.thisWeek :
        item.key === 'thisMonth' ? strings.activity.headerDates.thisMonth :
        item.key === 'earlier' ? strings.activity.headerDates.earlier 
          : strings.activity.headerDates.earlier
      } 
    </Text>
  }
  
  renderPageContent = ({ item }) => {
    return <FlatList
      ListHeaderComponent={this.renderHeaderDate(item)}
      data={item.messages}
      renderItem={this.renderActivity}
    />
  }

  renderActivity = ({ item }) => {
    return <Activity item={item} />;
  }

  renderNotifications = () => {
    if (!notification.notificationCount) return null;
    return (
      <View style={{ flex: 1, marginBottom: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <ProfilePicture item={notification} size={48} />
          <View style={{ flexDirection: 'column', marginLeft: 15 }}>
            <Text style={{ color: colors.text }}>{strings.activity.header.title}</Text>
            <Text style={{ color: colors.textFaded2 }}>{strings.activity.header.subtitle}</Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <FlatList style={styles.container}
      ListHeaderComponent={this.renderNotifications}
      data={allMessages}
      renderItem={this.renderPageContent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 20
  },
  headerDate: {
    color: colors.text,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15
  }
});

export default ActivityScreen;
