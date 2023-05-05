import {db} from '../../../environment/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getUsersDetails(callback) {
  let allData = [];
  let itemRef = db.ref(`/users/`);
  try {
    const jsonVal = await AsyncStorage.getItem('saveItems');
    if (jsonVal) {
      let values = await JSON.parse(jsonVal);
      await itemRef.once('value', snapshot => {
        snapshot.forEach(data => {
          if (data.key == values.Id) {
            allData.push(data.child('Information').val());
          }
        });
      });
    }
  } catch (error) {
    console.log(error);
  }

  callback(allData);
}

export default getUsersDetails;
