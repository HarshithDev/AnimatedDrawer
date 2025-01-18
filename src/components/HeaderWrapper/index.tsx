import React, { FC } from 'react';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';
import { THEME } from '../../assets/theme';
import { useDrawerProgress } from '@react-navigation/drawer';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { headerWrapperStyles } from './styles';
import { IHeaderWrapper } from './types';

const HeaderWrapper: FC<IHeaderWrapper> = (props) => {
    const navigation = useNavigation();
    const drawerProgress = useDrawerProgress();
    const { top } = useSafeAreaInsets();
    const width = Dimensions.get('window').width;
    const halfWidth = width * 0.5;
    const viewStyles = useAnimatedStyle(() => {
    const rotate = interpolate(drawerProgress.value, [0, 1], [0, -8]);
    const shift = interpolate(drawerProgress.value, [0, 1], [0, 60]);
    return {
        transform: [
        { translateX: halfWidth + shift },
        { rotate: `${rotate}deg` },
        { translateX: -width * 0.5 },
        ],
    };
    });

    const mainAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress.value, [0, 1], [0, top]);
    return {
        transform: [{ translateY }],
    };
    });

  return (
    <Animated.View style={mainAnimatedStyle}>
    <Animated.View style={[viewStyles, headerWrapperStyles.wrapper]}>
        <View style={headerWrapperStyles.header}>
          <TouchableOpacity onPress={() => navigation.dispatch({ type: 'TOGGLE_DRAWER' })}>
            <Icon name="bars" size={30} iconStyle="solid" color={THEME.lightgrey} />
          </TouchableOpacity>
          <Text style={headerWrapperStyles.headerTxt}>{props.screenName}</Text>
        </View>
        <View style={headerWrapperStyles.container}>
            {props.children}
        </View>
    </Animated.View>
    </Animated.View>
  );
};

export default HeaderWrapper;
