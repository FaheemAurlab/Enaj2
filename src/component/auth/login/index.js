import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import styles from './style';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
              onPress={() => navigation.navigate('DrawerScreen')}>
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
