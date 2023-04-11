// Action types
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const DELETE_TODO = "DELETE_TODO";

// Action creators
export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      text,
      completed: false,
    },
  };
};

export const completeTodo = (id) => {
  return {
    type: COMPLETE_TODO,
    payload: {
      id,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};
