import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { styles } from '../styles/Message';

export default Message = ({body, insertedAt, user: {firstName, lastName, profilePic}}) => {
  const getScreeHeight = () => Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <Image 
        source={profilePic ? {uri: profilePic} : require('../images/avatarPlaceholder.png')}
        style={{
          ...styles.image,
          width: getScreeHeight() * 0.05,
          height: getScreeHeight() * 0.05
        }}
      />

      <View>
        <Text>`${firstName} ${lastName}`</Text>
        <Text>{body}</Text>
      </View>

      <Text>{insertedAt}</Text>
    </View>
  )
}
