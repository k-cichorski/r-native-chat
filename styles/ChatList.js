import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      borderRadius: 35,
      backgroundColor: 'transparent',
      width: '100%',
      flex: 1,
    },
    flatList: {
      borderRadius: 35,
      flex: 1,
      marginTop: Platform.OS === 'ios' ? '30%' : '35%',
      backgroundColor: '#fff'
    }
});
