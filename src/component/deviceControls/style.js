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

  fdcTxt: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
    alignSelf: 'center',
  },
  ControlTxt: {
    fontSize: 26,
    fontWeight: '400',
    color: 'black',
    alignSelf: 'center',
    marginTop: 10,
  },

  controlContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
    padding: 20,
  },
});

export default styles;
