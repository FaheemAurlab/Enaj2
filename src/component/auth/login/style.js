import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#8f53c5',
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
    marginTop: 160,
    marginBottom: 50,
    padding: 10,
    paddingTop: 80,
    borderRadius: 12,
  },

  MemberText: {
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
    alignSelf: 'center',
  },

  input: {
    backgroundColor: '#e3e5e2',
    height: 50,
    width: '96%',
    margin: '2%',
    marginTop: '10%',
    marginBottom: -16,
    opacity: 0.7,
    borderRadius: 30,
    paddingLeft: 20,
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
  loginbtnText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '400',
  },

  forgetCont: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 35,
  },
  forgot: {
    color: 'black',
    fontSize: 14,
    fontWeight: '300',
  },
  userAndPass: {
    color: 'black',
    fontWeight: '400',
  },
});

export default styles;
