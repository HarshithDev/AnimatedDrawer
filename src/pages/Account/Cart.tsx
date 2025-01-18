import React, { FC } from 'react';
import { IDefaultProps } from '../../engine/utils/common.types';
import { Text, View } from 'react-native';
import HeaderWrapper from '../../components/HeaderWrapper';

const Cart: FC<IDefaultProps> = () => {

  return (
    <HeaderWrapper screenName="Cart">
      <View><Text>Cart</Text></View>
    </HeaderWrapper>
  );
};

export default Cart;
