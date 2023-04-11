import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
