import React, { useEffect } from 'react';
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
import { Provider, connect } from 'react-redux';
import { increment } from "actions";
import { loadUserPage } from 'actions'

const TestScreen = (props) => {
  console.log("22222222", props.users["1326963"])
  return (
    <View>
      <TouchableOpacity onPress={() => {
        props.loadUserPage('ozcanzaferayan')}
      }>
        <Text>btn</Text>
      </TouchableOpacity>
      <Text>{props.users["1326963"] && props.users["1326963"].blog}</Text>
      <Text>{props.errorMessage}</Text>
      <Text>{props.loading}</Text>
    </View>
  );
};

 const mapStateToProps = (state) => {
   const {
    entities: { users, repos },
    errorMessage,
    loading,
  } = state
    return {
    users,
    errorMessage
  }
}

const mapDispatchToProps = {
  loadUserPage
};

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen);