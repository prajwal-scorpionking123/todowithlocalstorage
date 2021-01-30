import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todo";
const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async (todo) => {
    setTodos([...todos, todo]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const markComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <Container>
      <h1>Todo App with local storage</h1>
      <Row>
        <Col md-4>
          <TodoForm addTodos={addTodos}></TodoForm>
        </Col>
        <Col md-4>
          <Todos todos={todos} markComplete={markComplete} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
