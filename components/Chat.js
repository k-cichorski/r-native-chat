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
  const { loading: loadingRoom, data: roomData, errorRoom, refetch } = useQuery(GET_ROOM(id));
  const [sendMessage, { mutData, error }] = useMutation(SEND_MESSAGE);
  const [skip, setSkip] = useState(true);
  const { loading: loadingSub, data: subData , error: errorSub } = useSubscription(
    MESSAGE_SUBSCRIPTION,
    {
      skip,
      variables: {roomId: id}
    });
  let flatList;
  let textInput;

  if (subData?.messageAdded) {
    refetch();
  }

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
    onChangeText('');
    textInput.clear();
  };

  useEffect(() => {
    setSkip(false);
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
          
          <FlatList
            ref={el => flatList = el}
            data={room && [...room.messages].sort((a, b) => a.insertedAt > b.insertedAt)}
            renderItem={renderItem}
            keyExtractor={message => message.id}
            style={{
              ...styles.flatList,
              marginTop: showingKeyboard ? null : styles.flatList.marginTop,
              paddingTop: showingKeyboard ? '10%' : null
            }}
            onContentSizeChange={() => flatList?.scrollToEnd()}
            onLayout={() => flatList?.scrollToEnd()}
            ListFooterComponent={<View style={{paddingBottom: '10%'}} />}
          />

          <View style={styles.inputContainer}>
            <TextInput
              ref={el => textInput = el}
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
