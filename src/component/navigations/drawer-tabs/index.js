import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import Dashboard from '../../dashboard';
import Controls from '../../deviceControls';
import Logout from '../../logout';
import styles from './style';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen';

import Icon from 'react-native-ionicons';

const Drawer = createDrawerNavigator();

// drawer bar

const CustomDrawer = props => {
  useEffect(() => {
    setTimeout(() => {
      // hiding splash screen
      SplashScreen.hide();
    }, 300);
  }, []);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.container}>
          <Image
            source={require('../../../../assets/laptop.png')}
            style={{width: 60, height: 60, borderRadius: 20}}
          />

          <View style={styles.parentCont}>
            <View style={styles.child1}>
              <Text style={styles.dummyTxt}>Welcome,</Text>
              <Text style={styles.span}>QAISER</Text>
            </View>
            <View style={styles.child2}>
              <Image
                source={require('../../../../assets/message.png')}
                style={styles.img}
              />
              <Image
                source={require('../../../../assets/user.png')}
                style={styles.img}
              />
              <Image
                source={require('../../../../assets/setting.png')}
                style={styles.img}
              />
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.dashbordTxt}>Dashboard</Text>
        </View>

        {/* // drawer custom items */}
        <DrawerItem
          label="Close Menu"
          icon={({focused, color, size}) => (
            <Icon
              name="md-close"
              size={23}
              color={focused ? '#7cc' : 'black'}
              style={{marginRight: -15}}
            />
          )}
          onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const DrawerScreens = props => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: '#e6004c',
        drawerInactiveBackgroundColor: '#FFFFFF',
        drawerActiveTintColor: 'white',
        drawerStyle: {
          backgroundColor: 'white',
          width: 250,
        },
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'start',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 18,
        },
        headerRight: () => (
          <View style={{marginRight: 20}}>
            <Text style={{fontWeight: '800', fontSize: 18}}>Dashboard</Text>
          </View>
        ),
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Dashboard"
        options={{
          drawerLabel: 'OverView',
          title: 'Menu',
          drawerIcon: ({focused}) => (
            <Icon
              name="home"
              size={23}
              color={focused ? 'white' : 'grey'}
              style={{marginRight: -15}}
            />
          ),
        }}
        component={Dashboard}
      />

      <Drawer.Screen
        name="DeviceControl"
        options={{
          drawerLabel: 'Field device Controls',
          title: 'Field device Controls',
          drawerIcon: ({focused}) => (
            <Icon
              name="eye"
              size={23}
              color={focused ? 'white' : 'grey'}
              style={{marginRight: -15}}
            />
          ),
        }}
        component={Controls}
      />

      <Drawer.Screen
        name="API settings"
        options={{
          drawerLabel: 'API settings',
          title: 'API settings',
          drawerIcon: ({focused}) => (
            <Icon
              name="ios-settings"
              size={23}
              color={focused ? 'white' : 'grey'}
              style={{marginRight: -15}}
            />
          ),
        }}
        component={Dashboard}
      />

      <Drawer.Screen
        name="Profile settings"
        options={{
          drawerLabel: 'Profile settings',
          title: 'Profile settings',
          drawerIcon: ({focused}) => (
            <Icon
              name="settings"
              size={23}
              color={focused ? 'white' : 'grey'}
              style={{marginRight: -15}}
            />
          ),
        }}
        component={Logout}
      />
    </Drawer.Navigator>
  );
};

export default DrawerScreens;
