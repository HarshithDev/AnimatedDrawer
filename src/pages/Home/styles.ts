import {StyleSheet} from 'react-native';

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 16,
  },
  headerTxt: {
    letterSpacing: 3,
    textTransform: 'uppercase',
    fontSize: 18,
  },
});
