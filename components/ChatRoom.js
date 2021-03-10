import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableHighlight, Dimensions } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ROOM } from '../queries';
import { styles } from '../styles/ChatRoom';

export default ChatRoom = ({id, imageUri, navigation}) => {
  const { data } = useQuery(GET_ROOM(id));
  const [room, setRoom] = useState(null);
  let lastMessage =room && [...room.messages].sort((a, b) => a.insertedAt > b.insertedAt).slice(-1)[0];

  const getScreeHeight = () => Dimensions.get('window').height;

  const pressHandler = () => {
    navigation.navigate('Chat', {id});
  };

  useEffect(() => {
    if (data) {
      setRoom(data.room);
    }
  }, [data]);

  return (
    <TouchableHighlight onPress={pressHandler} underlayColor="#e0dfdc" style={styles.touchable}>
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
