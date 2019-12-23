import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Platform,
    StatusBar,
    FlatList,
    Image,
    Dimensions,
    Button,
    TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import ProfilePicture from './ProfilePicture';

const StoryListItem = (props) => 
    <View style={{
        flex: 1,
        marginRight: 15, flexDirection: 'column', alignItems: 'center'
    }}>
        <ProfilePicture item={props.item} />
        <Text style={{ color: '#fff', fontWeight: 'normal', fontSize: 12, marginTop: 5 }}>{props.item.key}</Text>
    </View>

export default StoryListItem;