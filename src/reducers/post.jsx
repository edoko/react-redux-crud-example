import { ADD_POST, REMOVE_POST, UPDATE_POST } from "../actions/index.jsx";

const initialState = [];

export default function Post(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          content: action.content
        }
      ];
    case REMOVE_POST:
      return state.filter(({ id }) => id !== action.id);
    case UPDATE_POST:
      return state.map(
        post => (post.id === action.id ? { ...post, ...action } : post)
      );
    default:
      return state;
  }
}
