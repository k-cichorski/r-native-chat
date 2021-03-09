import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableHighlight, Dimensions } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ROOM } from '../queries';
import { styles } from '../styles/ChatRoom';

export default ChatRoom = ({id, imageUri}) => {
  const { data } = useQuery(GET_ROOM(id));
  const [room, setRoom] = useState(null);
  let lastMessage = room?.messages.slice(-1)[0];

  getScreeHeight = () => Dimensions.get('window').height;

  useEffect(() => {
    if (data) {
      setRoom(data.room);
    }
  }, [data]);

  return (
    <TouchableHighlight onPress={() => {}} underlayColor="#e0dfdc" style={styles.touchable} >
      <View style={styles.container}>
          <Image 
            source={imageUri ? {uri: imageUri} : require('../images/avatarPlaceholder.png')}
            style={{
              ...styles.image,
              width: getScreeHeight() * 0.1,
              height: getScreeHeight() * 0.1
            }}
          />

          <View style={styles.textContainer}>
            <View style={styles.roomInfo}>
              <Text style={styles.roomName} numberOfLines={1}>{room?.name}</Text>
              <Text style={styles.messageTime}>{lastMessage?.insertedAt.split(' ')[1].slice(0, -3)}</Text>
            </View>

            <View>
              <Text style={styles.message} numberOfLines={1}>{lastMessage?.body}</Text>
            </View>
          </View>
      </View>
    </TouchableHighlight>
  )
}
