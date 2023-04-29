import 'react-native-gesture-handler';
import * as React from 'react';
import DrawerScreens from './drawer-tabs';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DrawerScreen">
        <Stack.Screen
          name="DrawerScreen"
          component={DrawerScreens}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Screens;
