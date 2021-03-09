import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      justifyContent: 'flex-end',
      height: '20%',
      width: '100%',
      position: 'absolute',
      top: 0,
      zIndex: 2
    },
    title: {
      color: 'white',
      paddingBottom: '5%',
      paddingLeft: '5%',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace'
    }
});
