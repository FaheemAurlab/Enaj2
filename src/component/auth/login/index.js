import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import userAuth from './checkAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';

import styles from './style';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const userCredentials = await AsyncStorage.getItem('saveItems');

        if (userCredentials) {
          navigation.navigate('DrawerScreen');
        } else {
          SplashScreen.hide();
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <ScrollView>
          <View>
            <Text style={styles.MemberText}>Member Login</Text>
          </View>

          <View>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Username or Email"
              placeholderTextColor={'#9A9696'}
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Passsword"
              placeholderTextColor={'#9A9696'}
            />
          </View>

          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => userAuth(email, password, navigation)}>
              <Text style={styles.loginbtnText}>LOGIN</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.forgetCont}>
            <Text style={styles.forgot}>Forgot </Text>
            <Text style={styles.userAndPass}>Username / Password?</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.footerCont}>
            <Text style={styles.footerTxt}>Create Your Account </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;
