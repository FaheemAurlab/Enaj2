import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text, Alert, Image} from 'react-native';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ToastMessage from '../ToastMessage';
import getUsersDetails from './getUsers';
import {firebaseAuth} from '../../../environment/config';
import Item from './itemConatiner';
import styles from './style';

const Logout = ({navigation}) => {
  const [user, setUser] = useState('');
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [lastLogin, setLastLogin] = useState('');

  async function getLastLogin() {
    try {
      const jsonVal = await AsyncStorage.getItem('saveItems');
      if (jsonVal) {
        let values = await JSON.parse(jsonVal);
        setLastLogin(values.loginTime);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    function callback(data) {
      data.map(item => {
        setUser(item.userName);
        setFname(item.firstName);
        setLname(item.lastName);
        setEmail(item.Email);
        setPhoneNo(item.phoneNum);
      });
    }

    getUsersDetails(callback);
    getLastLogin();
  });

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={{marginTop: 10, alignSelf: 'center'}}>
          <Image
            source={require('../../../assets/laptop.png')}
            style={{width: 160, height: 160}}
          />
        </View>

        <View style={{marginTop: 40}}></View>
        <Item name="UserName" value={user} />
        <Item name="First Name" value={fName} />
        <Item name="Last Name" value={lName} />
        <Item name="Email" value={email} />
        <Item name="Phone" value={phoneNo} />
        <Item name="Last Login" value={lastLogin} />

        {/* // ask user for logout if yes then navigate to the login screen and making stack empty */}

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
