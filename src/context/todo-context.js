import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

const TodoContext = createContext();
const useTodo = () => useContext(TodoContext);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() =>
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );

  useEffect(
    () => localStorage.setItem("todos", JSON.stringify(todos)),
    [todos]
  );

  const addTodo = (todo) => {
    setTodos((prev) => [
      ...prev,
      {
        _id: uuid(),
        todo,
        isCompleted: false,
      },
    ]);
  };

  const removeTodo = (id) =>
    setTodos((prev) => prev.filter((todo) => todo._id !== id));

  const toggleCompletion = (id) =>
    setTodos((prev) =>
      prev.map((todo) =>
        todo._id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );

  const removeAllCompleted = () =>
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted));

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        toggleCompletion,
        removeAllCompleted,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { useTodo, TodoProvider };
