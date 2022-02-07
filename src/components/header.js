import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const Header = () => (
  <View>
    <Text style={styles.header}>TEUKU</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: moderateScale(20),
    fontWeight: 'bold',
  },
});

export default Header;
