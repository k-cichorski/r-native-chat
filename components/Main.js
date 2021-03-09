import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/Main'

import ChatList from './ChatList';
import ChatHeader from './ChatHeader';

export default Main = () => {
  return (
    <View style={styles.container}>
      <ChatHeader title='Chatly' />
      <ChatList />
    </View>
  );
}
