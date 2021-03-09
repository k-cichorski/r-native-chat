import React, { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../queries';
import { styles } from '../styles/ChatList';

import ChatRoom from './ChatRoom';

export default ChatList = () => {
  const { loading, data } = useQuery(GET_ROOMS);
  const [rooms, setRooms] = useState([]);

  const renderItem = ({item}) => (
    <ChatRoom id={item.id} imageUri={item.roomPic} />
  );

  useEffect(() => {
    if (!loading && data) {
      setRooms([...data.usersRooms.rooms].reverse());
    }
  }, [data]);

  if (loading) return <ActivityIndicator animating={true} size="large" color="#999999" />

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={rooms}
        renderItem={renderItem}
        keyExtractor={room => room.id}
        style={styles.flatList}
      />
    </SafeAreaView>
  )
}
