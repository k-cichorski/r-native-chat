import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../queries';
import { styles } from '../styles/ChatList';
import { useStateValue } from '../store/StateProvider';
import { ROOMS_FETCHED } from '../store/reducer';

import { LinearGradient } from 'expo-linear-gradient';
import ChatRoom from './ChatRoom';
import ChatHeader from './ChatHeader';

export default ChatList = () => {
  const { loading, data } = useQuery(GET_ROOMS);
  const [{rooms}, dispatch] = useStateValue();

  const renderItem = ({item}) => (
    <ChatRoom id={item.id} imageUri={item.roomPic} />
  );

  useEffect(() => {
    if (!loading && data) {
      dispatch({
        type: ROOMS_FETCHED,
        payload: [...data.usersRooms.rooms].reverse()
      });
    }
  }, [data]);

  if (loading) return <ActivityIndicator animating={true} size="large" color="#999999" />

  return (
    
    <LinearGradient
      colors={['#6c0299', '#ffa600']}
      locations={[0.25, 1]}
      start={[0, 0]}
      end={[1, 0]} style={styles.container}>
    <SafeAreaView style={styles.container}>
      <ChatHeader title='Chatly' />
      <FlatList data={rooms}
        renderItem={renderItem}
        keyExtractor={room => room.id}
        style={styles.flatList}
      />
    </SafeAreaView>
    </LinearGradient>
  )
}
