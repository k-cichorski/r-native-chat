import { gql } from '@apollo/client';

export const GET_ROOMS = gql`
  query getRooms {
    usersRooms {
      rooms {
        id,
        name,
        roomPic
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
        insertedAt
      },
      name
    }
  }
`
