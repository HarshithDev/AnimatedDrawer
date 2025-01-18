import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './DrawerNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contact from '../../pages/Contact';
import Icon from '@react-native-vector-icons/fontawesome6';
import { THEME } from '../../assets/theme';

const Tab = createBottomTabNavigator();


const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={({ route }) => ({
        headerShown: false,
         // eslint-disable-next-line react/no-unstable-nested-components
         tabBarIcon: () => {
           let iconName;
           if (route.name === 'Home') {
             iconName = 'house';
           } else if (route.name === 'Contact') {
             iconName = 'address-card';
           }
           return <Icon name={iconName as any} size={16} iconStyle="solid" color={THEME.grey} />;
         },
       })}
      >
        <Tab.Screen name="Home" component={DrawerNavigator} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
