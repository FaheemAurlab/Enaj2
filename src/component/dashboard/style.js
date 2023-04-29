import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  dashboardCont: {
    display: 'flex',
    flexDirection: 'row',
    gap: -10,
    padding: 20,
    paddingBottom: 0,
  },
  dashboardImg: {
    width: 35,
    height: 35,
    marginTop: 2,
  },
  dashboardTxt: {
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 20,
    marginBottom: 10,
  },
  parent: {
    flex: 1,
    backgroundColor: '#e6e6e6',
  },
  container1: {
    color: 'black',
  },
});

export default styles;
