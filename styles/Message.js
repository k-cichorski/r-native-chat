import { StyleSheet } from 'react-native';

export const interlocutorStyles = StyleSheet.create({
    container: {
      padding: '5%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textContainer: {
      maxWidth: '70%',
      backgroundColor: '#ededed',
      flex: 1,
      borderRadius: 20,
      borderBottomLeftRadius: 0,
      padding: '2%'
    }, 
    userName: {
      fontWeight: 'bold',
      textAlign: 'center'
    },
    messageBody: {
      textAlign: 'center'
    },
    image: {
      alignSelf: 'flex-end',
      borderRadius: 180
    }
});

export const userStyles = StyleSheet.create({
  ...interlocutorStyles,
  container: {
    ...interlocutorStyles.container,
    flexDirection: 'row-reverse'
  },
  textContainer: {
    ...interlocutorStyles.textContainer,
    backgroundColor: '#d1cfcf',
    borderBottomLeftRadius: interlocutorStyles.textContainer.borderRadius,
    borderBottomRightRadius: 0
  }
});
