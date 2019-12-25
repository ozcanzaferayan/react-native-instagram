import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import colors from 'res/colors';
import activityTypes from './ActivityTypes';
import strings from '../../../res/strings';

const ActivityDescription = (props) => {

  return <View style={styles.container}>
    <Text style={styles.text}>
      <Text style={styles.name}>{props.item.key}</Text>
      {
        props.item.activityType === activityTypes.LIKE
          ? strings.activity.description.like
          : strings.activity.description.mention
      }
      {props.item.lastMsg}
      <Text style={styles.date}> · {props.item.sendTime}</Text>
    </Text>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginStart: 20,
    marginEnd: 20,
  },
  text: {
    color: colors.textFaded1,
    fontWeight: 'normal'
  },
  name: {
    fontWeight: 'bold'
  },
  date: {
    color: colors.textFaded2,
  },
});

export default ActivityDescription;