import React from 'react';
import {Text, View, Image} from 'react-native';
import Dashboard from '../../dashboard';
import styles from './style';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
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
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              paddingLeft: 15,
              paddingBottom: 15,
              fontWeight: '400',
            }}>
            Dashboard
          </Text>
        </View>

        <DrawerItem
          label="Close Menu"
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
          title: 'OverView',
        }}
        component={Dashboard}
      />
    </Drawer.Navigator>
  );
};

export default DrawerScreens;
