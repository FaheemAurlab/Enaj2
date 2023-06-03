import {firebaseAuth} from '../../../../environment/config';
import ToastMessage from '../../ToastMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import validateEmail from '../validation';
import {Alert} from 'react-native';

// authenticate user if yes then store their creditentails in async storage and navigate to the login screen
function userAuth(email, pass, navigation) {
  const storeData = async () => {
    try {
      const userStatus = firebaseAuth.currentUser;
      if (userStatus) {
        const lastLoginTime = userStatus.metadata.lastSignInTime;
        const userId = userStatus.uid;
        const jsonValue = JSON.stringify({
          Id: userId,
          loginTime: lastLoginTime,
        });
        await AsyncStorage.setItem('saveItems', jsonValue);
        navigation.navigate('DrawerScreen');
      }
    } catch (e) {
      console.log(e);
    }
  };

  // validation for email and password for not being empty

  const emailValidation = validateEmail(email);

  if (!email) {
    ToastMessage('Email should not be empty');
  } else if (!emailValidation) {
    ToastMessage('Invalid Email');
  } else if (!pass) {
    ToastMessage('Password should not be empty');
  } else {
    firebaseAuth
      .signInWithEmailAndPassword(email, pass)
      .then(() => storeData())
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          ToastMessage('Invaild Email');
        } else if (error.code === 'auth/wrong-password') {
          ToastMessage('Invalid Password');
        } else if (error.code === 'auth/user-not-found') {
          ToastMessage('No user Found on this Email');
        } else if (error.code === 'auth/network-request-failed') {
          Alert.alert(
            'Network Error',
            'There was a problem with the network connection. Please check your internet connection and try again.',
          );
        } else {
          console.log(error);
        }
      });
  }
}

export default userAuth;
