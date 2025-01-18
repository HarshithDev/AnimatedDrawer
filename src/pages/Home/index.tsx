import React, { FC } from 'react';
import { IDefaultProps } from '../../engine/utils/common.types';
import { Text, View } from 'react-native';
import HeaderWrapper from '../../components/HeaderWrapper';

const Home: FC<IDefaultProps> = () => {

  return (
    <HeaderWrapper screenName="Start">
      <View><Text>Home</Text></View>
    </HeaderWrapper>
  );
};

export default Home;
