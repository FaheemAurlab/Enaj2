import {ToastAndroid, Platform, Alert} from 'react-native';

const ToastMessage = message => {
  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert('Message', `${message}`, [
      {
        text: 'Ok',
        onPress: () => null,
        style: 'OK',
      },
    ]);
  }
};

export default ToastMessage;
