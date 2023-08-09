import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Tts from 'react-native-tts';
import styles from './style';
import Gauge from '../Guages/GuageApi';
import Rectangle from '../Guages/GuageD';
import {ScrollView} from 'react-native-gesture-handler';

const Temperature = props => {
  const triggerVoice = () => {
    console.log('comming');
    if (props.name == 'Temperature') {
      Tts.speak('normal ');
    } else if (props.name == 'Mositer') {
      Tts.speak('high');
    } else if (props.name == 'Humidity') {
      Tts.speak('Humidity Theek hai');
    } else if (props.name == 'Light Intensity') {
      Tts.speak('Light ok hai');
    }
  };
  return (
    <ScrollView>
      <Gauge />
    </ScrollView>
  );
};

export default Temperature;
