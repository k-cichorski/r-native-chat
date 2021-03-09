import React from 'react';
import { Text } from 'react-native';
import { styles } from '../styles/ChatHeader';
import { LinearGradient } from 'expo-linear-gradient';

export default ChatHeader = ({title}) => {
  return (
      <LinearGradient
        colors={['#6c0299', '#ffa600']}
        locations={[0.25, 1]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.container}>
          
          <Text style={styles.title}>{title && title}</Text>
      </LinearGradient>
  );
}
