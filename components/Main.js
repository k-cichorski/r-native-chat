import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/Main'

import ChatList from './ChatList';

export default Main = () => {
  return (
    <View style={styles.container}>
      <ChatList />
    </View>
  );
}
