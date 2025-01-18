import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList, useDrawerProgress } from '@react-navigation/drawer';
import React, { FC } from 'react';
import { Alert, View } from 'react-native';
import { customDrawerStyles } from './styles';
import Separator from '../Separator';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomDrawer: FC<DrawerContentComponentProps> = (props) => {

  const drawerProgress = useDrawerProgress();
  const { top } = useSafeAreaInsets();
  const viewStyles = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress.value, [0, 1], [0, top]);
    return {
      transform: [{ translateY }],
    };
  });

  return (
    <View style={customDrawerStyles.wrapper}>
    <Animated.View style={[viewStyles, customDrawerStyles.container]}>
    <DrawerContentScrollView {...props}>
        <DrawerItem labelStyle={customDrawerStyles.logoDummy} label={'Beka'} onPress={() => Alert.alert('Logo Clicked!')} />
        <DrawerItemList {...props} />
        <Separator />
        <DrawerItem labelStyle={customDrawerStyles.signoutCta} label={'Signout'} onPress={() => Alert.alert('Signout Clicked!')} />
    </DrawerContentScrollView>
    </Animated.View>
    </View>
  );
};

export default CustomDrawer;
