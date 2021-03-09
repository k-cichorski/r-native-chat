export const initialState = {
  rooms: []
}

export const ROOMS_FETCHED = 'ROOMS_FETCHED';

export const reducer = (state, action) => {
  switch(action.type) {
    case ROOMS_FETCHED:
      return ({
        ...state,
        rooms: action.payload,
        loading: false
      })

    default:
      return state
  }
};
