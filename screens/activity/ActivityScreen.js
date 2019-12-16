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

const ActivityScreen = () => {
  const messages = [
    { key: 'ngordon', hasStory: true, activityType: 'mention', src: 'https://i.pravatar.cc/150?img=8', sendTime: 'şimdi', lastMsg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor' },
    { key: 'r_von_rails', hasStory: false, activityType: 'mention', src: 'https://i.pravatar.cc/150?img=9', sendTime: '1s', lastMsg: 'eiusmod tempor incididunt ut labore et dolore magna aliqua. Id diam' },
    { key: 'figNelson', hasStory: false, activityType: 'mention', src: 'https://i.pravatar.cc/150?img=10', sendTime: '3s', lastMsg: '😂' },
    { key: 'benjaminEv', hasStory: false, activityType: 'mention', src: 'https://i.pravatar.cc/150?img=11', sendTime: '1g', lastMsg: 'scelerisque viverra mauris in aliquam. Pellentesque elit eget gravida' },
    { key: 'gilesPos', hasStory: true, activityType: 'mention', src: 'https://i.pravatar.cc/150?img=12', sendTime: '2h', lastMsg: 'cum sociis. Id porta nibh venenatis cras sed felis eget velit aliquet.' },
    { key: 'hugh27', hasStory: false, activityType: 'mention', src: 'https://i.pravatar.cc/150?img=13', sendTime: '10h', lastMsg: 'Imperdiet dui accumsan sit amet. Sed cras ornare arcu dui vivamus' },
    { key: 'b_guidelines', hasStory: false, activityType: 'mention', src: 'https://i.pravatar.cc/150?img=14', sendTime: '20h', lastMsg: 'arcu felis bibendum ut. Scelerisque purus semper eget duis at tellus at' },
    { key: 'ngordon2', hasStory: false, activityType: 'mention', src: 'https://i.pravatar.cc/150?img=8', sendTime: '30h', lastMsg: 'urna condimentum. Aliquam sem et tortor consequat id. Lorem sed' },
    { key: 'r_von_rails2', hasStory: false, activityType: 'mention', src: 'https://i.pravatar.cc/150?img=9', sendTime: '32h', lastMsg: 'risus ultricies tristique nulla. At quis risus sed vulputate. Consectetur' },
    { key: 'figNelson2', hasStory: false, activityType: 'mention', src: 'https://i.pravatar.cc/150?img=10', sendTime: '3s', lastMsg: 'libero id faucibus nisl tincidunt. Id semper risus in hendrerit gravida' },
    { key: 'benjaminEv2', hasStory: false, activityType: 'mention', src: 'https://i.pravatar.cc/150?img=11', sendTime: '1g', lastMsg: 'rutrum quisque non tellus. Nibh ipsum consequat nisl vel pretium' },
    { key: 'gilesPos2', hasStory: false, activityType: 'mention', src: 'https://i.pravatar.cc/150?img=12', sendTime: '2h', lastMsg: 'lectus quam id leo. Massa sapien faucibus et molestie. Semper eget' },
    { key: 'hugh272', hasStory: false, activityType: 'mention', src: 'https://i.pravatar.cc/150?img=13', sendTime: '10h', lastMsg: 'duis at tellus at urna condimentum. Duis convallis convallis tellus id' },
    { key: 'b_guidelines2', hasStory: false, activityType: 'mention', src: 'https://i.pravatar.cc/150?img=14', sendTime: '20h', lastMsg: 'interdum velit laoreet. Velit aliquet sagittis id consectetur purus.' },
  ];

  renderActivities = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 20, justifyContent: 'space-between' }}>


        <LinearGradient
          colors={item.hasStory ? ['#feda75', '#d62976'] : []}
          start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
          useAngle={true}
          angle={45}
          style={{ height: 51, width: 51, borderRadius: 51, alignItems: 'center', justifyContent: 'center' }}
        >
          <Image source={{ uri: item.src }} style={{ width: 48, height: 48, borderRadius: 48, borderWidth: 3, borderColor: '#000' }} />
        </LinearGradient>


        <View style={{ flex: 1, flexDirection: 'column', marginStart: 20 }}>
          <View style={{ flexDirection: 'row', marginRight: 10}} >
            <Text style={{ color: '#ddd' , fontWeight: 'normal' }}>
              <Text style={{fontWeight: 'bold'}}>{item.key}</Text> {item.activityType === 'like' 
              ? 'yorumunu beğendi' : 'bir yorumda senden bahsetti'}: {item.lastMsg}
            </Text>
            {/* <Text style={{ color: '#aaa' , fontWeight: 'normal' }} > · </Text>
            <Text style={{ color: '#aaa' , fontWeight: 'normal' }} >{item.sendTime}</Text> */}
          </View>
        </View>
        <TouchableOpacity>
          <Image source={{ uri: 'https://picsum.photos/512' }} style={{ width: 48, height: 48 }} />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <FlatList
      style={{ backgroundColor: '#000', padding: 20 }}
      ListHeaderComponent={() =>
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={{ uri: 'https://picsum.photos/512' }} style={{ width: 48, height: 48, borderRadius: 48 }} />
              <View style={{ position: 'absolute', top: 5, start: 32, backgroundColor: '#d00', 
                  width: 17, height: 17, borderRadius: 17, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 12, fontWeight: 'bold' }}>5</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
              <Text style={{ color: '#fff' }}>Takip İstekleri</Text>
              <Text style={{ color: '#999' }}>İstekleri onayla veya yok say</Text>
            </View>
          </View>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginTop: 15 }}>Bugün</Text>
        </View>
      }
      data={messages}
      renderItem={this.renderActivities}
    />
  );
};

export default ActivityScreen;
