import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from '../styles/ChatRoom';

export default ChatRoom = ({name, imageUri}) => {
  console.log(name);
  return (
    <View>
      <Text>{name}</Text>
      <Image 
        source={{
          uri: imageUri ? imageUri : null
        }}
        style={styles.image}
      />
    </View>
  )
}
