import React from 'react';
import {View, Text, ScrollView, Image, LogBox} from 'react-native';
import Temperature from './valueHolder';

import styles from './style';

LogBox.ignoreAllLogs();

const Dashboard = () => {
  return (
    <ScrollView style={styles.parent}>
      <View>
        <View style={styles.dashboardCont}>
          <Image
            style={styles.dashboardImg}
            source={require('../../../assets/dashboard.png')}
          />
          <Text style={styles.dashboardTxt}>My Dashboard</Text>
        </View>

        <Temperature
          src={require('../../../assets/temp.png')}
          name="Temperature"
          value="39"
          color="red"
        />

        <Temperature
          src={require('../../../assets/moisture.png')}
          name="Mositer"
          value="28"
          color="blue"
        />

        <Temperature
          src={require('../../../assets/humidity.png')}
          name="Humidity"
          value="3"
          color="green"
        />

        <Temperature
          src={require('../../../assets/light.png')}
          name="Light Intensity"
          value="37"
          color="yellow"
        />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
