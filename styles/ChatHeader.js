import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      justifyContent: 'flex-end',
      height: '25%',
      width: '100%'
    },
    title: {
      color: 'white',
      padding: '5%',
      paddingBottom: '20%',
      fontSize: 40,
      fontWeight: 'bold',
      fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace'
    }
});
