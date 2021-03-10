import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: '100%',
    flex: 1
  },
  flatList: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    flex: 1,
    marginTop: Platform.OS === 'ios' ? '40%' : '35%',
    backgroundColor: '#fff'
  },
  textInput: {
    backgroundColor: '#fff',
    height: '10%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '5%',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    flex: 1,
    height: '100%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    borderColor: 'lightgrey',
    borderTopWidth: 1,
    paddingBottom: '2%',
    paddingTop: '2%'
  }
});
