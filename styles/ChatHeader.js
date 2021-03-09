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
      padding: '5%',
      paddingTop: '10%',
      paddingBottom: Platform.OS === 'ios' ? '5%' : '10%',
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace'
    }
});
