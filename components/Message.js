import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import { userStyles, interlocutorStyles } from '../styles/Message';

export default Message = ({body, insertedAt, currentUser, user: {firstName, lastName, profilePic, id}}) => {
    const getScreeHeight = () => Dimensions.get('window').height;
    let styles;
    id == currentUser.id ? styles = userStyles : styles = interlocutorStyles;

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

        <View style={styles.textContainer}>
          <Text style={styles.userName}>{firstName} {lastName}</Text>
          <Text style={styles.messageBody}>{body}</Text>
        </View>

        <Text>{insertedAt?.split(' ')[1].slice(0, -3)}</Text>
      </View>
    )
}
