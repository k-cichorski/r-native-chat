import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { GET_ROOM, MESSAGE_SUBSCRIPTION } from '../queries';
import { useQuery, useSubscription } from '@apollo/client';
import { useStateValue } from '../store/StateProvider';
import { styles } from '../styles/Chat';

import { LinearGradient } from 'expo-linear-gradient';
import ChatHeader from './ChatHeader';
import Message from './Message';

export default Chat = ({route}) => {
  const [room, setRoom] = useState(false);
  const [{currentUser}, dispatch] = useStateValue();
  const {id} = route.params;
  const { loading: loadingRoom, data: roomData, errorRoom } = useQuery(GET_ROOM(id));
  const { loading: loadingSub, data: subData, errorSub } = useSubscription(MESSAGE_SUBSCRIPTION(id));

  const renderItem = ({item}) => (
    <Message body={item.body} user={item.user}
      insertedAt={item.insertedAt} currentUser={currentUser} />
  );

  useEffect(() => {
    if (!loadingRoom && roomData) {
      setRoom(roomData.room);
    }
  }, [roomData]);

  return (
    <LinearGradient
      colors={['#6c0299', '#ffa600']}
      locations={[0.25, 1]}
      start={[0, 0]}
      end={[1, 0]} style={styles.container}>
    <SafeAreaView style={styles.container}>
      <ChatHeader title={room && room.name} style={{fontSize: 15}} />
      <FlatList data={room && room.messages}
        renderItem={renderItem}
        keyExtractor={message => message.id}
        style={styles.flatList}
      />
    </SafeAreaView>
    </LinearGradient>
  )
}
