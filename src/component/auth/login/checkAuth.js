import {firebaseAuth} from '../../../../environment/config';
import ToastMessage from '../../ToastMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';

function userAuth(email, pass, navigation) {
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify({Email: email, Password: pass});
      await AsyncStorage.setItem('saveItems', jsonValue);
      console.log(jsonValue);
      navigation.navigate('DrawerScreen');
    } catch (e) {
      console.log(e);
    }
  };

  if (!email) {
    ToastMessage('Email should not be empty');
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
        } else {
          console.log(error);
        }
      });
  }
}

export default userAuth;
