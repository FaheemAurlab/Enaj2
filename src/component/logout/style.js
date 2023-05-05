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

  ViewHolder: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  textHolder1: {
    width: '30%',
    color: 'black',
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 10,
  },
  textHolder2: {
    width: '70%',
    color: 'grey',
    marginLeft: 10,
    fontSize: 18,
  },
  btn: {
    backgroundColor: '#56b743',
    height: 40,
    width: '30%',
    margin: '2%',
    marginTop: '10%',
    color: 'white',
    borderRadius: 5,
    justifyContent: 'center',
  },
  logoutbtnText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '400',
  },
});

export default styles;
