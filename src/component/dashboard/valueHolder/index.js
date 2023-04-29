import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Tts from 'react-native-tts';
import styles from './style';

const Temperature = props => {
  const TriggerVoice = () => {
    console.log('comming');
    if (props.name == 'Temperature') {
      Tts.speak('Temperature normal hai');
    } else if (props.name == 'Mositer') {
      Tts.speak('Mositer zeyda hai');
    } else if (props.name == 'Humidity') {
      Tts.speak('Humidity Theek hai');
    } else if (props.name == 'Light Intensity') {
      Tts.speak('Light ok hai');
    }
  };
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={TriggerVoice}>
        <View style={styles.imageContainer}>
          <Image
            style={{
              width: 100,
              height: 100,
              marginTop: 2,
            }}
            source={props.src}
          />
          {/* <Text style={styles.name}>{props.name}</Text> */}
        </View>

        {/* <View style={styles.valueContainer}>
          <Text style={styles.value}>{props.value}</Text>
        </View> */}
      </TouchableOpacity>

      <View
        style={{
          borderBottomColor: `${props.color}`,
          borderBottomWidth: 7,
          opacity: 0.7,
          width: '90%',
          margin: '5%',
          marginTop: 0,
          marginBottom: 0,
        }}
      />
    </>
  );
};

export default Temperature;
