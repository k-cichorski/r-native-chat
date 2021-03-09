export const initialState = {
  rooms: [],
  currentUser: null
}

export const ROOMS_FETCHED = 'ROOMS_FETCHED';

export const reducer = (state, action) => {
  switch(action.type) {
    case ROOMS_FETCHED:
      return ({
        ...state,
        rooms: action.payload.rooms,
        currentUser: action.payload.user
      })

    default:
      return state
  }
};
