import React from 'react';
import { View, Text } from 'react-native';

const Rectangle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.group_785} />

      <View style={styles.group_786} />

      <View style={styles.group_787} />

      <View style={styles.volume_up_2} />

      <Text style={styles.high}>High</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  group_785: {
    width: 327,
    height: 220,
    marginLeft: 24,
    marginTop: 157,
    backgroundColor: 'transparent',
    elevation: 2,
  },
  group_786: {
    width: 258,
    height: 235.72,
    marginLeft: 53,
    marginTop: 180,
    backgroundColor: 'transparent',
  },
  group_787: {
    width: 50,
    height: 50,
    marginLeft: 189,
    marginTop: 239,
    backgroundColor: 'transparent',
  },
  volume_up_2: {
    width: 35,
    height: 35,
    marginLeft: 291,
    marginTop: 327,
    backgroundColor: 'transparent',
    // You need to provide the actual volume_up_2 image source here.
    // For example: backgroundImage: require('./volume_up_2.png'),
  },
  high: {
    fontSize: 21,
    color: '#000000',
    marginLeft: 136,
    marginTop: 253,
    // You may need to specify the font family and lineHeight here as well.
    // fontFamily: 'Montserrat',
    // lineHeight: 26,
  },
};

export default Rectangle;
