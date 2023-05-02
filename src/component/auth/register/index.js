import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

import {firebaseAuth} from '../../../../environment/config';
import {db} from '../../../../environment/config';
import styles from './style';
const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function registerUser(email, pass) {
    firebaseAuth
      .createUserWithEmailAndPassword(email, pass)
      .then(response => {
        const uid = response.user.uid;
        console.log(uid);
        db.ref('users')
          .child(`${uid}`)
          .set({
            Information: {
              Email: email,
              Password: pass,
              Name: name,
            },
          });
        Alert.alert('User Auth', 'User Register Sucessfully', [
          {text: 'OK', onPress: () => navigation.navigate('Login')},
        ]);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Email address is already in use');
        } else {
          console.log(error);
        }
      });
  }

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <ScrollView>
          <View>
            <Text style={styles.MemberText}>Member Register</Text>
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
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder="Full Name"
              placeholderTextColor={'#9A9696'}
            />
          </View>

          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => registerUser(email, password)}>
              <Text style={styles.loginbtnText}>Register</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.footerCont}>
            <Text style={styles.footerTxt}>Already have Account </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;
