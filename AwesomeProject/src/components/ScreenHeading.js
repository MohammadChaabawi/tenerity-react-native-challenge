import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';

/**
 * The screen's heading to be rendered.
 * @param heading The title of the screen.
 * @returns Title of the screen JSX element.
 */
const ScreenHeading = ({ heading }) => {
  return (
    <View>
      <Text style={styles.heading}>{heading}</Text>
    </View>
  );
};

export default ScreenHeading;

const styles = StyleSheet.create({
  heading: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 29,
    color: Colors.white,
    fontWeight: '500',
    letterSpacing: 2,
  },
});
