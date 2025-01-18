import React, { FC } from 'react';
import { IDefaultProps } from '../../engine/utils/common.types';
import { Text } from 'react-native';
import HeaderWrapper from '../../components/HeaderWrapper';

const YourOrders: FC<IDefaultProps> = () => {
  return (
    <HeaderWrapper screenName="Orders">
      <Text>Orders</Text>
    </HeaderWrapper>
  );
};

export default YourOrders;
