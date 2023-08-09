import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, Button, Alert, ImageBackground} from 'react-native';
import GaugeMeter from './Guage';
import {StyleSheet} from 'react-native';
import { icon } from './icons';
import Tts from 'react-native-tts';
import hot from '../../../../assets/hot2.png';

const Gauge = () => {
  const [sensorData, setSensorData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ip = 'http://10.4.17.119:60000/api/data';

  const fetchSensorData = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(ip);
      const data = await response.json();
      setSensorData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchSensorData();
  }, [fetchSensorData]);

  useEffect(() => {
    const interval = setInterval(fetchSensorData, 100000000); // Fetch data every 30 seconds (adjust the interval as needed)

    return () => {
      clearInterval(interval); // Clear the interval when the component is unmounted
    };
  }, [fetchSensorData]);

  if (isLoading) {
    return <Text>Loading...</Text>; // Display a loading indicator if data is being fetched
  }
  //Icons to print on the guages
  

  return (
    <View style={styles.container}>
      {sensorData.map((item, index) => {
        const {Device_id, Type, value} = item.data;

        const handleIconPress = () => {
          triggerVoice(Type, value); // Call the triggerVoice function with the correct Type
        };

        return (
          <View key={index} style={styles.gaugeWrapper}>
            <View style={styles.rectangleBackground} />

            <GaugeMeter
              size={250}
              strokeWidth={10}
              value={value}
              min={0}
              max={100}
            />

            <View style={styles.iconwrapper}>
              {/* Use TouchableOpacity and call handleIconPress when the icon is pressed */}
              <TouchableOpacity onPress={handleIconPress}>
                {/* {icon} */
                <ImageBackground
                source={require('../../../../assets/hot2.png')}
                style={styles.imageStyle}
              />
                }
            
              </TouchableOpacity>
            </View>
            

            <Text style={styles.typeText}>
              {Type === 'Temp'
                ? <>'Temperature:{value}
                </>
              
                :Type === 'Humidity'
                ?<> Humidity:{value}`
                <Text style={styles.icons}>💧</Text>
                </>
                : Type === 'Moisture'
                ? <>Moisture: {value}
                <Text style={styles.icons}></Text>
                <ImageBackground
            source={require('../../../../assets/moisture.png')}
            style={styles.imageStyle}
          />
                </>  
                : null}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
const triggerVoice = (type, value) => {
  if (type === 'Temp') {
    console.log('Temp');
    const val = 30;
    Tts.speak('the temprature value is ' + value.toString());
  } else if (type === 'Moisture') {
    Tts.speak('The Moisture value is' + value.toString());
  } else if (type === 'Humidity') {
    Tts.speak('Humidity Value is' + value.toString());
    console.log('Temp');
  } else if (type === 'Light Intensity') {
    Tts.speak('Light ok hai');
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  gaugeWrapper: {
    marginBottom: 20,

    alignItems: 'center',
  },
  rectangleBackground: {
    position: 'absolute',

    alignContent: 'center',
    width: '80%',
    height: '85%',
    backgroundColor: '#F5E9DB', // Adjust the color as needed
    zIndex: -1,
    borderRadius: 30,
  },
  typeText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    fontFamily: 'bold',
    textAlign: 'left',
    marginBottom: 70,
    marginTop: -50,
  },
  speaker: {},
  iconwrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    marginLeft: 260,

    marginBottom: 10,
  },
  icons:{
    fontSize: 35,
  },
  imageStyle: {
    width: 45,
    height: 45,
    resizeMode: 'contain',

  },
});
export default Gauge;
