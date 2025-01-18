import React, { FC } from 'react';
import { IDefaultProps } from '../../engine/utils/common.types';
import { Text } from 'react-native';
import HeaderWrapper from '../../components/HeaderWrapper';

const Favourites: FC<IDefaultProps> = () => {
  return (
    <HeaderWrapper screenName="Favourites">
      <Text>Favourites</Text>
    </HeaderWrapper>
  );
};

export default Favourites;
