import React from 'react';
import { View } from 'react-native';
import { Circle, Text, G, Line, Svg  } from 'react-native-svg';
import { StyleSheet } from 'react-native';


const GaugeMeter = ({ size, strokeWidth, value, min, max }) => {
  // const radius = (size - strokeWidth) / 2;
  const radius=100;
  const circumference = 2 * Math.PI * radius;
  const progress = (value - min) / (max - min);
  // const progress=(value/100)*circumference

  return (
    <View>
      <Svg width={size} height={size}>
        <G transform={`translate(${size / 2}, ${size / 2})`}>
          <Circle
            cx="0"
            cy="0"
            r={radius}
            fill="none"
            stroke="#ECECEC"
            strokeWidth={strokeWidth}
          />
          <Circle
            cx="0"
            cy="0"
            r={radius}
            fill="none"
            stroke="#FF5722"
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={circumference * (1 - progress)}
            strokeLinecap="round"
          />
      <Text style={styles.typeText}>{value}%</Text>
        </G>
      </Svg>
    </View>
  );
};
 
export default GaugeMeter;
const styles = StyleSheet.create({
  typeText: {
    fontSize: 20,
    color: 'red',
    fontWeight: '500',
    fontFamily: 'bold',
    position:'relative',
    left:20,

  },
})