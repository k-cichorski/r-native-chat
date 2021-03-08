import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../queries';

import ChatRoom from './ChatRoom';

export default ChatList = () => {
  const { loading, data, error } = useQuery(GET_ROOMS);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (!loading && data) {
      setRooms(data.usersRooms.rooms);
      console.log(data.usersRooms.rooms);
    }
  }, [data]);

  return (
    <View>
      {rooms?.map(
        room => <ChatRoom key={room.id} imageUri={room.roomPic} name={room.name} />
      )}
    </View>
  )
}
