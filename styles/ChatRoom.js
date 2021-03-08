import { StyleSheet } from 'react-native';
import RN from 'react-native';

const SCREEN_HEIGHT = RN.Dimensions.get('window').height;

export const styles = StyleSheet.create({
    image: {
        width: SCREEN_HEIGHT * 0.1,
        height: SCREEN_HEIGHT * 0.1,
        borderRadius: 180,
        marginRight: '5%'
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      maxWidth: '95%',
      marginBottom: '8%'
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
    }
});
