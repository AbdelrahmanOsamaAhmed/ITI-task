let initialState = {
  favourites: [],
  lang:"en-US"
};

export default function favouriteReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_Favourite":
      let isIn = state.favourites.findIndex(
        (element) => element.id == action.payload.id
      );
      if (isIn != -1) return state;
      state.favourites.push(action.payload);
      return state;

      
    case "REMOVE_Favourite":
      state.favourites = state.favourites.filter(element =>{
        if (element != action.payload) return element;
      });
      return   {
        ...state
      }  
    case "LANG":
      return {
        ...state,
        lang:action.payload
      }

    default:
      return state;
  }
}
