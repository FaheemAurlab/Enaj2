import validateEmail from '../validation';
import {firebaseAuth} from '../../../../environment/config';
import {db} from '../../../../environment/config';
import ToastMessage from '../../ToastMessage';
import {Alert} from 'react-native';

function registerUser(
  email,
  password,
  user,
  fName,
  lName,
  phoneNo,
  navigation,
) {
  const emailValidation = validateEmail(email);

  if (!email) {
    ToastMessage('Email should not be empty');
  } else if (!emailValidation) {
    ToastMessage('Invalid Email');
  } else if (!password) {
    ToastMessage('Password should not be empty');
  } else if (!user) {
    ToastMessage('User should not be empty');
  } else if (!fName) {
    ToastMessage('Enter First name');
  } else if (!lName) {
    ToastMessage('Enter Lasr name');
  } else if (!phoneNo) {
    ToastMessage('Phone no should not be empty');
  } else if (phoneNo.length < 11) {
    ToastMessage('Enter Full Number with 11 digits');
  } else {
    firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        const uid = response.user.uid;
        console.log(uid);
        db.ref('users')
          .child(`${uid}`)
          .set({
            Information: {
              Email: email,
              Password: password,
              userName: user,
              firstName: fName,
              lastName: lName,
              phoneNum: phoneNo,
            },
          });
        Alert.alert('User Auth', 'User Register Sucessfully', [
          {text: 'OK', onPress: () => navigation.navigate('Login')},
        ]);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          ToastMessage('Email address is already in use');
        } else {
          console.log(error);
        }
      });
  }
}

export default registerUser;
