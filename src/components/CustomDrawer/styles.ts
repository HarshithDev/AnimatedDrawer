import {StyleSheet} from 'react-native';
import {THEME} from '../../assets/theme';

export const customDrawerStyles = StyleSheet.create({
  logoDummy: {
    color: THEME.white,
    fontWeight: 700,
    fontSize: 24,
    margin: 30,
  },
  signoutCta: {
    color: THEME.white,
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: THEME.blue,
    borderTopLeftRadius: 40,
  },
  wrapper: {
    width: '100%',
    height: '100%',
  },
});
