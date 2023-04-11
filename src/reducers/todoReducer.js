import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "../actions/todoActions";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case COMPLETE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default todoReducer;
