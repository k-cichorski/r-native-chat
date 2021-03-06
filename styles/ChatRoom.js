import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    image: {
        borderRadius: 180,
        marginRight: '5%',
        backgroundColor: '#fff'
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      padding: '5%'
    },
    roomInfo: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 'auto',
      marginTop: '3%'
    },
    roomName: {
      flex: 1,
      fontWeight: 'bold',
      marginRight: '3%'
    },
    messageTime: {
      marginRight: '8%',
      color: '#B8B8B8'
    },
    message: {
      marginRight: '15%',
      marginTop: '3%'
    },
    textContainer: {
      width: '80%',
      marginRight: '12%',
      justifyContent: 'center',
      marginBottom: '3%'
    },
    touchable: {
      borderRadius: 35
    }
});
