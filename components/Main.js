import React from 'react';
import { styles } from '../styles/Main'

import { LinearGradient } from 'expo-linear-gradient';

import ChatList from './ChatList';
import ChatHeader from './ChatHeader';

export default Main = () => {
  return (
    <LinearGradient
      colors={['#6c0299', '#ffa600']}
      locations={[0.25, 1]}
      start={[0, 0]}
      end={[1, 0]} style={styles.container}>
        <ChatHeader title='Chatly' />
        <ChatList />
    </LinearGradient>
  );
}
