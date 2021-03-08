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
