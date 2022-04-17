import React, { useState } from "react";
import ReactDOM from "react-dom";
import { MdDelete } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { motion } from "framer-motion";
import { useTodo } from "../context";

export const TodoModal = ({ closeModal }) => {
  const [todoModalRef, setTodoModalRef] = useState(null);
  const [todo, setTodo] = useState("");
  const { todos, addTodo, removeTodo, toggleCompletion, removeAllCompleted } =
    useTodo();

  const handleCloseModal = (event) => {
    if (todoModalRef.contains(event.target)) return;
    closeModal();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && todo.trim().length > 0) {
      addTodo(todo);
      setTodo("");
    }
  };

  return ReactDOM.createPortal(
    <div
      onClick={handleCloseModal}
      className="absolute bottom-0 right-0 h-full w-full"
    >
      <motion.div
        initial={{ right: "-100%" }}
        animate={{ right: 0 }}
        exit={{ right: "-100%" }}
        transition={{ type: "tween", duration: 0.5 }}
        className="absolute right-0 ml-auto h-full backdrop-blur-md shadow-lg w-[25%]"
        ref={setTodoModalRef}
      >
        <div className="flex justify-between mt-5 border-b">
          <h2 className="text-white text-4xl px-5">To do</h2>
          <button
            className="text-white mx-5 text-xl"
            title="Clear completed Todos"
            onClick={removeAllCompleted}
          >
            <MdDelete />
          </button>
        </div>
        <div>
          {todos.length === 0 ? (
            <p className="text-gray-300 text-center text-xl p-10">
              Your tasks will appear here. <br />
              Start planning your day.
            </p>
          ) : (
            todos.map((todo) => (
              <div className="text-white flex items-center" key={todo._id}>
                <button
                  className={`text-xl px-3 ${
                    todo.isCompleted ? "text-green-400" : ""
                  }`}
                  onClick={() => toggleCompletion(todo._id)}
                >
                  &#10004;
                </button>
                <p
                  className={`text-xl p-1 mx-1 ${
                    todo.isCompleted ? "line-through" : ""
                  }`}
                >
                  {todo.todo}
                </p>
                <button
                  className="ml-auto px-3"
                  onClick={() => removeTodo(todo._id)}
                >
                  <TiDelete />
                </button>
              </div>
            ))
          )}
        </div>
        <input
          className="absolute bottom-5 w-full p-2 bg-transparent focus:border-b text-2xl text-center mt-auto focus:outline-none text-white"
          type="text"
          placeholder="Add todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </motion.div>
    </div>,
    document.body
  );
};
