import React from 'react';
import { View } from 'react-native';
import { styles } from './styles/App';
import ChatList from './components/ChatList';

export default function App() {
  return (
    <View style={styles.container}>
      <ChatList />
    </View>
  );
}
