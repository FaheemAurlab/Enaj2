import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    height: 130,
    margin: '5%',
    marginBottom: 0,
    marginTop: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    padding: 10,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: 'black',
    fontSize: 18,
    marginTop: 5,
    fontWeight: '500',
    paddingLeft: 10,
  },
  valueContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  value: {
    color: 'black',
    fontSize: 24,
    fontWeight: '500',
    alignSelf: 'flex-end',
  },
});

export default styles;
