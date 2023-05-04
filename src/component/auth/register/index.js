import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import registerUser from './checkAuth';

import styles from './style';
const Register = ({navigation}) => {
  const [user, setUser] = useState('');
  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

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
              placeholder="Enter Your Email "
              placeholderTextColor={'#9A9696'}
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="Passsword"
              placeholderTextColor={'#9A9696'}
              secureTextEntry={true}
            />
            <TextInput
              style={styles.input}
              onChangeText={setUser}
              value={user}
              placeholder="Username"
              placeholderTextColor={'#9A9696'}
            />
            <TextInput
              style={styles.input}
              onChangeText={setFname}
              value={fName}
              placeholder="First Name"
              placeholderTextColor={'#9A9696'}
            />
            <TextInput
              style={styles.input}
              onChangeText={setLname}
              value={lName}
              placeholder="Last Name"
              placeholderTextColor={'#9A9696'}
            />
            <TextInput
              style={styles.input}
              onChangeText={setPhoneNo}
              value={phoneNo}
              placeholder="Your Phone Number"
              placeholderTextColor={'#9A9696'}
              keyboardType="numeric"
              maxLength={11}
            />
          </View>

          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                registerUser(
                  email,
                  password,
                  user,
                  fName,
                  lName,
                  phoneNo,
                  navigation,
                );
              }}>
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
