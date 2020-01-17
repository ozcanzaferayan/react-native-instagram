import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import images from 'res/images';
import palette from 'res/palette';
import colors from 'res/colors';
import I18n from 'utils/I18n';
import ActivityScreen from './ActivityScreen';


const ActivityNavigator = createStackNavigator({
  Activity: {
    screen: ActivityScreen,
    navigationOptions: ({ navigation }) => ({
      ...palette.header,
      headerLeft: () => (
        <View style={styles.headerLeftContainer}>
          <Text style={styles.headerLeftText}> {I18n.t('activity.tabHeader')}</Text>
        </View>
      ),
    })
  }
});

const styles = StyleSheet.create({
  headerLeftContainer: { ...palette.header.headerLeftContainer },
  headerLeftText: { color: colors.text, marginLeft: 10, fontSize: 18 },
});

export default ActivityNavigator;
