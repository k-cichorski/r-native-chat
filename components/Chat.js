import React, { useEffect, useState } from 'react';
import { Platform, FlatList, TextInput, KeyboardAvoidingView, Image, View, TouchableHighlight } from 'react-native';
import { GET_ROOM, MESSAGE_SUBSCRIPTION, SEND_MESSAGE } from '../queries';
import { useQuery, useSubscription, useMutation } from '@apollo/client';
import { useStateValue } from '../store/StateProvider';
import { styles } from '../styles/Chat';

import { LinearGradient } from 'expo-linear-gradient';
import ChatHeader from './ChatHeader';
import Message from './Message';

export default Chat = ({route}) => {
  const [room, setRoom] = useState(false);
  const [userMessage, onChangeText] = useState(false);
  const [showingKeyboard, changeShowingKeyboard] = useState(false);
  const [{currentUser}, dispatch] = useStateValue();
  const {id} = route.params;
  const { loading: loadingRoom, data: roomData, errorRoom } = useQuery(GET_ROOM(id));
  const [sendMessage, { data, error }] = useMutation(SEND_MESSAGE);
  const { loading: loadingSub, data: subData, errorSub } = useSubscription(MESSAGE_SUBSCRIPTION(id));

  const renderItem = ({item}) => (
    <Message body={item.body} user={item.user}
      insertedAt={item.insertedAt} currentUser={currentUser} />
  );

  const keyboardStateHandler = () => {
    changeShowingKeyboard(!showingKeyboard);
  };

  const handleSend = () => {
    sendMessage({
      variables: {
        body: userMessage,
        roomId: id
      }
    });
  };

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
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
         { !showingKeyboard && <ChatHeader title={room && room.name} />}
          
          <FlatList data={room && room.messages}
            renderItem={renderItem}
            keyExtractor={message => message.id}
            style={{
              ...styles.flatList,
              marginTop: showingKeyboard ? null : styles.flatList.marginTop,
              paddingTop: showingKeyboard ? '10%' : null
            }}
          />

          <View style={styles.inputContainer}>
            <TextInput
              onChangeText={text => onChangeText(text)}
              onFocus={keyboardStateHandler}
              onEndEditing={keyboardStateHandler}
              placeholder='Say something nice... :)'
              style={styles.textInput}
              multiline={true}
            />

            <TouchableHighlight onPress={handleSend} underlayColor={'tranparent'}>
              <Image source={require('../images/send_button.png')} />
            </TouchableHighlight>
          </View>
        </KeyboardAvoidingView>
    </LinearGradient>
  )
}
