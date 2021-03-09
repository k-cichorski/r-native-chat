import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../styles/ChatHeader';

export default ChatHeader = ({title}) => {
  return (
      <View style={styles.container}>
          <Text style={styles.title}>{title && title}</Text>
      </View>
  );
}
