import React from 'react';
import {TouchableOpacity, View, Text, Alert} from 'react-native';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToastMessage from '../ToastMessage';
import styles from './style';

const Logout = ({navigation}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              Alert.alert('Logout', 'Are You Sure you want to logout?', [
                {
                  text: 'No',
                  onPress: null,
                },
                {
                  text: 'Yes',
                  onPress: () =>
                    navigation.dispatch(
                      StackActions.popToTop(),
                      AsyncStorage.clear(),
                      ToastMessage('Logout Succesfully'),
                    ),
                },
              ])
            }>
            <Text style={styles.logoutbtnText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Logout;
