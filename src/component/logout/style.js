import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginTop: 30,
    marginBottom: 50,
    padding: 10,
    paddingTop: 30,
  },

  btn: {
    backgroundColor: '#56b743',
    height: 50,
    width: '96%',
    margin: '2%',
    marginTop: '14%',
    color: 'white',
    borderRadius: 30,
    justifyContent: 'center',
  },
  logoutbtnText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '400',
  },
});

export default styles;
