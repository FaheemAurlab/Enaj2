import {View, Text} from 'react-native';
import styles from './style';
const Item = props => {
  return (
    <View style={styles.ViewHolder}>
      <Text style={styles.textHolder1}>{props.name}</Text>
      <Text style={styles.textHolder2}>{props.value}</Text>
    </View>
  );
};
export default Item;
