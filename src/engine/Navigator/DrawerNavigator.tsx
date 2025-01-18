/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';
import { DrawerNavigationType } from './Navigator.types';
import { Home } from '../../pages';
import YourOrders from '../../pages/Account/YourOrders';
import Cart from '../../pages/Account/Cart';
import Favourites from '../../pages/Account/Favourites';
import CustomDrawer from '../../components/CustomDrawer';
import { styles } from './main.styles';
import { THEME } from '../../assets/theme';
import { useWindowDimensions } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator<DrawerNavigationType>();

const DrawerNavigator = () => {
  const {width} = useWindowDimensions();

  const screenOptions: DrawerNavigationOptions = {
    drawerStyle: { width: width * 0.5 },
    overlayColor: 'transparent',
    header: () => null,
    drawerActiveTintColor:  THEME.orange,
    drawerInactiveTintColor: THEME.white,
    drawerActiveBackgroundColor: THEME.rosePink,
    drawerLabelStyle: { fontSize: 18 },
    headerShown: false,
    drawerType: 'slide',
    sceneStyle: { backgroundColor: THEME.blue },
  };

  return (
    <SafeAreaProvider>
      <Drawer.Navigator initialRouteName="Start" screenOptions={screenOptions} drawerContent={(props) => <CustomDrawer {...props} />}>
          <Drawer.Screen name={'Start'} options={{ headerTitleStyle: styles.header }} component={Home} />
          <Drawer.Screen name={'YourCart'} options={{ title: 'Your Cart' }} component={Cart} />
          <Drawer.Screen name={'Favourites'} options={{ title: 'Favourites' }} component={Favourites} />
          <Drawer.Screen name={'YourOrders'} options={{ title: 'Your Orders' }} component={YourOrders} />
      </Drawer.Navigator>
    </SafeAreaProvider>
  );
};

export default DrawerNavigator;
