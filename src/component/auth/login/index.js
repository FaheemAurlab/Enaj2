import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './style';
const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.outerContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
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
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Login;
