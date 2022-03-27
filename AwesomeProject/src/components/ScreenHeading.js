import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '@/constants/Colors';

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
    fontSize: 31,
    color: Colors.white,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 3,
  },
});
