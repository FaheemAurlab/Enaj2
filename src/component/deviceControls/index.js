import React from 'react';
import {View, Text, Image} from 'react-native';
import Switch from './toggle-switch';
import styles from './style';

// control components for on/off leds pumps supply and fans

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
        <View style={styles.controlContainer}>
          <Switch name="Led's" />
          <Switch name="Pump" />
        </View>
      </View>
    </View>
  );
};

export default Controls;
