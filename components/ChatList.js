import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../queries';

import ChatRoom from './ChatRoom';

export default ChatList = () => {
  const { loading, data } = useQuery(GET_ROOMS);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setRooms([...data.usersRooms.rooms].reverse());
    }
  }, [data]);

  if (loading) return <ActivityIndicator animating={true} size="large" color="#999999" />

  return (
    <View>
      {rooms?.map(
        room => <ChatRoom key={room.id} id={room.id} imageUri={room.roomPic} />
      )}
    </View>
  )
}
