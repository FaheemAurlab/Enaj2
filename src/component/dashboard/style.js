import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  dashboardCont: {
    display: 'flex',
    flexDirection: 'row',
    gap: -10,
    padding: 20,
    paddingBottom: 50,
  },
  dashboardImg: {
    width: 40,
    height: 40,
    marginTop:-1
  },
  dashboardTxt: {
    color: 'black',
    fontSize: 22,
    fontWeight: '600',
    marginLeft: 20,
    marginBottom: 50,
    marginTop:5,
  },
  parent: {
    
    backgroundColor: 'white',
  },
  container1: {
    color: 'black',
  },
  guagecomponent: {
    display: 'none',
    flex:1,
    flexDirection: 'row',
    gap: -10,
   
    paddingBottom: 50,
    marginTop:10,
  },
  guage: {
    color: 'black',
    marginTop: 20, // Update the marginTop value to 10
    marginBottom: 20,
    marginLeft: 0,
    marginRight:300,
    fontSize: 20,
  },
});

export default styles;
