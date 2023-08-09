import React from 'react';
import {View, Text, ScrollView, Image, LogBox} from 'react-native';
import Temperature from './valueHolder';
import Gauge from './Guages/GuageApi';
import Icon from'react-native-vector-icons/FontAwesome';

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
          <View style={{}}>
           <Text style={styles.dashboardTxt}>Welcome To</Text>
           </View>
          <Text style={styles.dashboardTxt}>My Dashboard</Text>
         </View>
         {/* <Icon name="rocket" size={30} color="#900" /> */}
        <View styles={styles.guagecomponent}>
        <Gauge style={styles.guage}></Gauge> 
        </View>
        
      </View>
    </ScrollView>
  );
};

export default Dashboard;
