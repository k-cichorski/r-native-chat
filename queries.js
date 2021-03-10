import { gql } from '@apollo/client';

export const GET_ROOMS = gql`
  query getRooms {
    usersRooms {
      rooms {
        id,
        name,
        roomPic
      },
      user {
        id,
        profilePic,
        firstName,
        lastName
      }
    }
  }
`;

export const GET_USER = gql`
  query getUser {
    user {
      email,
      firstName,
      id,
      lastName,
      profilePic,
      role
    }
  }
`;

export const GET_ROOM = (id) => gql`
  query getRoom {
    room(id: "${id}") {
      messages {
        body,
        insertedAt,
        id,
        user {
          firstName,
          lastName,
          profilePic,
          id
        }
      },
      name
    }
  }
`;

export const MESSAGE_SUBSCRIPTION = gql`
  subscription onMessageAdded($roomId: String!) {
    messageAdded(roomId: $roomId) {
      id,
      body,
      insertedAt,
      user {
        profilePic,
        firstName,
        lastName
      }
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendNewMessage($body: String!, $roomId: String!) {
    sendMessage(body: $body, roomId: $roomId) {
      insertedAt
    }
  }
`;
