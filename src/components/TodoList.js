import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, completeTodo, deleteTodo } from "../actions/todoActions";
import { Button, Container, Form, ListGroup, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoList = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
    setError("");
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    } else {
      setError("Please enter your todo");
    }
  };

  const handlecompleteTodo = (id) => {
    dispatch(completeTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <Navbar className="Navbar bg-dark" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand className=" text-white fw-bold fs-3">
            Todo List Application
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <div className="row mt-4">
          <div className="col-lg-7">
            <Form.Group controlId="todoDescription">
              <Form.Label className="fs-4">Todo Description:</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={3}
                value={newTodo}
                onChange={handleInputChange}
              />
            </Form.Group>
            {error && <p className="text-danger mb-3">{error}</p>}{" "}
            <Button
              variant="outline-dark"
              className="mt-3"
              onClick={handleAddTodo}
            >
              Add Todo
            </Button>
            <ListGroup className="mt-3">
              {todos.map((todo) => (
                <ListGroup.Item
                  key={todo.id}
                  className="d-flex align-items-center text-break"
                >
                  <Form.Check
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handlecompleteTodo(todo.id)}
                    label={
                      todo.completed ? (
                        <del>{todo.text}</del>
                      ) : (
                        <span>{todo.text}</span>
                      )
                    }
                    className="flex-grow-1 "
                  />
                  <Button
                    variant="outline-danger"
                    className="ms-3 flex-shrink-0"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    Delete
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TodoList;
