import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    marginBottom: 20,
    backgroundColor: '#f6f6f6',
  },
  dummyTxt: {
    color: 'black',
  },
  parentCont: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 20,
  },
  child1: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
  },
  child2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  span: {
    fontWeight: '800',
    color: 'black',
  },
  img: {
    width: 15,
    height: 15,
  },
});

export default styles;
