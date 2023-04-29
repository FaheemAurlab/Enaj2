import React from 'react';
import {View, Text, Image, Switch} from 'react-native';
import styles from './style';
const Controls = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.fdcTxt}>Field Device</Text>
          <Text style={styles.fdcTxt}>Controls</Text>
        </View>

        <View style={{marginTop: 10, alignSelf: 'center'}}>
          <Image
            source={require('../../../assets/laptop.png')}
            style={{width: 160, height: 160}}
          />
        </View>

        <View>
          <Text style={styles.ControlTxt}>Control Switches</Text>
        </View>
      </View>
    </View>
  );
};

export default Controls;
