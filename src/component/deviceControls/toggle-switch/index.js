import React, {useState} from 'react';
import ToggleSwitch from 'toggle-switch-react-native';
import {View, Text} from 'react-native';
import styles from '../style';
const Switch = props => {
  const [status, setStatus] = useState();
  return (
    <View>
      <ToggleSwitch
        isOn={status}
        onColor="green"
        offColor="grey"
        size="large"
        onToggle={isOn => setStatus(isOn)}
      />

      <Text style={styles.ControlTxt}>{props.name}</Text>
    </View>
  );
};

export default Switch;
