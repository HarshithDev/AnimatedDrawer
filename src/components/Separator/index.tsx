import React from 'react';
import { StyleSheet, View } from 'react-native';
import { THEME } from '../../assets/theme';

const styles = StyleSheet.create({
    line: {
        height: 1,
        width: '100%',
        backgroundColor: THEME.lightgrey,
        marginTop: 45,
        marginBottom: 30,
    },
});

const Separator = () => {
  return (
    <View style={styles.line} />
  );
};

export default Separator;
